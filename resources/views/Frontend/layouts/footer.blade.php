<div id="footer" class="footer border-top pt-2">
    @if (request()->route()->getName() == 'chapter')
        <style>
            @media only screen and (max-width: 992px) {
                .footer {
                    margin-bottom: 52px;
                }
            }
        </style>
    @endif
    <div class="container">
        <div class="row">
            {{--            <div class="col-12 col-md-5">--}}
            {{--                <strong>TruyenHayHt</strong> - <a title="Đọc truyện online" class="text-dark text-decoration-none"--}}
            {{--                                                  href="#">Đọc truyện</a> online một cách nhanh nhất. Hỗ trợ mọi thiết--}}
            {{--                bị--}}
            {{--                như di--}}
            {{--                động và máy tính bảng.--}}
            {{--            </div>--}}
            @if (isset($setting) && $setting)
                <div class="col-12 col-md-5">
                    <strong>TruyenHayHt</strong> - <a
                            title={{$setting->footer_script}} > {!! $setting->footer_script !!}</a>
                </div>
            @endif
            <ul class="col-12 col-md-7 list-unstyled d-flex flex-wrap list-tag">
                @if(isset($menu['the_loai']))
                    @foreach($menu['the_loai'] as $itemMenu)
                        <li class="me-1">
                    <span class="badge text-bg-light"><a class="text-dark h-50 text-decoration-none"
                                                         href="{{ route('category', ['slug' => $itemMenu->slug]) }}" title={{$itemMenu->name}}>{{$itemMenu->name}}</a></span>
                        </li>
                    @endforeach
                @endif
            </ul>


            <div class="col-12"><a rel="license" href="http://creativecommons.org/licenses/by/4.0/">

                    <img
                            alt="Creative Commons License" style="border-width:0;margin-bottom: 10px"
                            src="https://i.creativecommons.org/l/by/4.0/88x31.png"></a><br>

                <p>Website hoạt động dưới Giấy phép truy cập mở <a rel="license"
                                                                   class="text-decoration-none text-dark hover-title"
                                                                   href="http://creativecommons.org/licenses/by/4.0/">Creative
                        Commons Attribution 4.0
                        International License</a></p>
            </div>
        </div>


    </div>
</div>
