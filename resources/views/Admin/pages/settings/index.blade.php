@extends('Admin.layouts.main')

@section('content')
    <section class="">
        <div class="row">

        </div>

        <div class="row" id="table-striped">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        @if (session()->has('success'))
                            <div class="alert alert-success p-1">
                                {{ session()->get('success') }}
                            </div>
                        @endif
                        <form id="form-crawl" class="form-validate" method="post" autocomplete="off"
                              action="{{ route('admin.display.update') }}">
                            @csrf
                            <div class="row mb-1">
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="col-12 mb-1">
                                        {!! FormUi::text('title', 'Title site', $errors, $setting, []) !!}
                                    </div>
                                    <div class="col-12 mb-1">
                                        {!! FormUi::text('description', 'Description site', $errors, $setting, []) !!}
                                    </div>
                                    <div class="col-12 mb-1">
                                        {!! FormUi::checkbox('index', 'Index', '', $errors, $setting) !!}
                                    </div>
                                    <div class="col-12 mb-1">
                                        {!! FormUi::textarea('header_script', 'Header script', $errors, $setting, []) !!}
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 col-lg-6">
                                    <div class="col-12 mb-1">
                                        {!! FormUi::textarea('body_script', 'Body script', $errors, $setting, []) !!}
                                    </div>
                                    <div class="col-12 mb-1">
                                        {!! FormUi::textarea('footer_script', 'Footer script', $errors, $setting, []) !!}
                                    </div>
                                </div>
                                <div class="col-12 col-md-6 mb-1">
                                    <img src="{{ asset($story->image ?? '') }}" alt=""
                                         style="margin-right: 5px; width:250px;" id="image_story"
                                         loading="lazy"
                                         data-image-default="{{ asset('assets/admin/images/default_image.jpg') }}">
                                    <input type="file" name="image" class="d-none" id="choose_file_image">
                                    <div class="action-image d-flex mt-1">
                                        <button type="button" class="btn btn-danger" id="remove_image"
                                                style="margin-right: 5px;">Xóa
                                        </button>
                                        <button type="button" class="btn btn-success" id="choose_image">Chọn
                                            ảnh
                                        </button>
                                    </div>
                                </div>

                            </div>


                            <div class="">
                                <button type="submit" class="btn btn-success me-1">
                                    Cập nhật
                                </button>
                                {{-- <a href="{{ route('admin.users.index') }}" class="btn btn-secondary me-1">
                                <i data-feather='rotate-ccw'></i>
                                Quay lại
                            </a> --}}
                            </div>
                        </form>
                    </div>

                    {{-- <div class="table-responsive">
                    <table id="tableProducts" class="table table-striped">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Vai trò</th>
                            <th>Trạng thái</th>
                            <th>IP đăng nhập<br>gần nhất</th>
                            <th>TG đăng nhập<br>gần nhất</th>
                            <th>Tác vụ</th>
                        </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div> --}}

                    <div class="row">
                        <div class="col-sm-12">


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection

@push('scripts-custom')
    <script>
        $(document).ready(function () {
            const imageStory = document.querySelector('#image_story')
            const btnRemoveImage = document.querySelector('#remove_image')
            const btnChooseImage = document.querySelector('#choose_image')

            btnRemoveImage.addEventListener('click', function () {
                if (imageStory) {
                    imageStory.setAttribute('src', imageStory.getAttribute('data-image-default'))
                }
            })

            const inputFileImage = document.querySelector('#choose_file_image')
            btnChooseImage.addEventListener('click', function () {
                if (inputFileImage) {
                    inputFileImage.click()
                }
            })

            inputFileImage.addEventListener('change', function (e) {
                const file = e.target.files[0];
                const preview = document.getElementById('preview');
                const clearButton = document.getElementById('clear');

                if (file) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        imageStory.src = e.target.result;
                        btnRemoveImage.style.display = 'block';
                    };
                    reader.readAsDataURL(file);
                } else {
                    imageStory.src = imageStory.getAttribute('data-image-default'); // Ảnh mặc định
                    btnRemoveImage.style.display = 'none';
                }
            })

            const deleteChapterBtn = $('.delete-chapter')
            deleteChapterBtn.on('click', function (e) {
                const chapterId = $(this).attr('data-chapter-id')
                const chapterName = $(this).attr('data-chapter-name')
                const action = $(this).attr('data-action')
                const method = $(this).attr('data-method')

                Swal.fire({
                    text: `Bạn có muốn xóa ${chapterName}`,
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes',
                    customClass: {
                        confirmButton: 'btn btn-primary',
                        cancelButton: 'btn btn-outline-danger ms-1'
                    },
                    buttonsStyling: false
                }).then(function (result) {
                    if (result.value) {
                        fetch(action, {
                            method: method,
                            headers: {
                                'Accept': 'application/json',
                                'Content-Type': 'application/json',
                                'X-CSRF-TOKEN': window.SuuTruyen.csrfToken,
                            },
                            body: JSON.stringify({
                                id: chapterId
                            })
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.success) {
                                    const trParent = e.target.closest('tr')
                                    trParent && trParent.remove()

                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: "Đã xóa thành công",
                                        showConfirmButton: false,
                                        timer: 2000
                                    })
                                }
                            })
                            .catch(function (error) {
                                console.log(error);
                                if (error.status !== 500) {
                                    let errorMessages = error.responseJSON.errors;
                                } else {
                                    errorContent = error.responseJSON.message;
                                }
                            })
                    }
                })

            })
        })
    </script>
@endpush
