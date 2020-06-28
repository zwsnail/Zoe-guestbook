<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Zoe&Jason's GuestBook</title>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ mix('css/app.css') }}" rel="stylesheet" type="text/css">
</head>
<body>

    <video autoplay="autoplay" loop="loop" muted>  
        <source  src="./assets/book.mp4" type="video/mp4" >;  
    </video>  

    <div id="app">
    <page></page>
    </div>

    <script src="{{ mix('js/app.js') }}"></script>

    
</body>

    <style>
    *{  
        margin: 0px;  
        padding: 0px;  
    }  
    video{  
        position: fixed;  
        right: 0px;  
        bottom: 0px;  
        min-width: 100%;  
        min-height: 100%;  
        height: 100%;  
        width: 100%;  
        object-fit: fill;
        z-index: -100;
        /*加滤镜*/  
        /*-webkit-filter: grayscale(100%);*/  
        /*filter:grayscale(100%);*/  
    }  
    source{  
        min-width: 100%;  
        min-height: 100%;  
        height: auto;  
        width: auto;  
    }  

    </style>

</html>