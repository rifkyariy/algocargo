currURL = window.location.href.slice(window.location.href.indexOf('?') + 1)

ex = currURL.split("&");
ex[0] = ex[0].split("=");
ex[1] = ex[1].split("=");
ex[1][1] = ex[1][1].split(",");

console.log(ex);


data = {
    'type':
        (ex[1][1].length==5)?'example':'test',
    'berat':
        ex[0][1],
    'steps':
        ex[1][1],
    'loop':
        ex[2]
};

console.log(data);


mainData = {
    'start' : {
        'title': 'Mulai',
        'desc': 'Merupakan tahap dimana semua persiapan dilakukan untuk melaksanakan pelayaran (mulai dari pengecekan kapal , bahan bakar , sampai rute yang akan ditempuh).',
        'detail': '<h5><b>Tahap Mulai (Terminal Point Symbol)</b></h5><div class="text-center"><img src="assets/img/detail/start.png" /></div><div class="text-left">Merupakan simbol flowchart yang digunakan untuk mendefinisikan suatu awal dan akhirnya suatu algoritma.</br></br><a href="https://yulisopianti.staff.telkomuniversity.ac.id/apa-itu-flowchart/">https://yulisopianti.staff.telkomuniversity.ac.id/apa-itu-flowchart/</a></div>',
        'img': 'assets/img/step/start.png',
        'color': '#8c1822',
        'scsimg': 'assets/img/success/start.png',
        'msg': 'tahap <b>Mulai</b>, tahap dimana semua persiapan dilakukan untuk melaksanakan pelayaran.'
    },
    'input' : {
        'title': 'Masukan',
        'desc': 'Merupakan tahap dimana berat kontainer akan ditimbang untuk menentukan berat kontainer.',
        'detail': '<h5><b>Tahap Masukan (Input-Output Symbol)</b></h5><div class="text-center"><img src="assets/img/detail/data.png" /></div><div class="text-left">Merupakan simbol flowchart yang digunakan untuk mendefinisikan suatu masukan dari pengguna (biasanya) pada suatu algoritma.</br></br><a href="https://yulisopianti.staff.telkomuniversity.ac.id/apa-itu-flowchart/">https://yulisopianti.staff.telkomuniversity.ac.id/apa-itu-flowchart/</a></div>',
        'img': 'assets/img/step/input.png',
        'color': '#ff6600',
        'scsimg': 'assets/img/success/input.png',
        'msg': 'tahap <b>Masukan</b>, tahap dimana satu buah kontainer ditimbang untuk mengetahui beratnya.',
    },
    'proses-seq' : {
        'title': 'Proses',
        'desc': 'Proses memidahkan kontainer ke dalam kapal, dimana jumlah maksimal yang mampu diangkut oleh kapal dalam satu waktu adalah 60 kontainer.',
        'detail': '<h5><b>Tahap Proses (Processing Symbol)</b></h5><div class="text-center"><img src="assets/img/detail/process.png" /></div><div class="text-left">Merupakan simbol flowchart yang digunakan untuk melakukan proses (deklarasi , inisialisasi ,dan proses - proses lainnya) pada suatu algoritma.</br></br><a href="https://yulisopianti.staff.telkomuniversity.ac.id/apa-itu-flowchart/">https://yulisopianti.staff.telkomuniversity.ac.id/apa-itu-flowchart/</a></div>',
        'img': 'assets/img/step/proses-seq.png',
        'color': '#9900cc',
        'scsimg': 'assets/img/success/proses-seq.png',
        'msg': 'tahap <b>Proses</b>, tahap dimana semua kontainer diletakkan langsung keatas kapal besar.'
    },
    'output' : {
        'title': 'Keluaran',
        'desc': 'Dapat diketahui bahwa berat total kontainer yang ada di kapal adalah 60 kali berat kontainer.',
        'detail': '<h5><b>Tahap Keluaran (Output Symbol)</b></h5><div class="text-center"><img src="assets/img/detail/output.png" /></div><div class="text-left">Merupakan simbol flowchart yang digunakan untuk mendefinisikan suatu keluaran dari pengguna pada suatu algoritma, dalam hal ini bentuk simbol dari tahap proses dapat menggunakan simbol yang dipakai pada tahap masukan ataupun dengan simbol di atas.</br></br><a href="https://yulisopianti.staff.telkomuniversity.ac.id/apa-itu-flowchart/">https://yulisopianti.staff.telkomuniversity.ac.id/apa-itu-flowchart/</a></div>',
        'img': 'assets/img/step/output.png',
        'color': '#ff6600',
        'scsimg': 'assets/img/success/output.svg',
        'msg': 'tahap <b>Keluaran</b>, tahap dimana berat total kontainer yang ada di kapal, dan beratnya adalah 60 kali dari berat satu buah kontainer.'
    },
    'end' : {
        'title': 'Selesai',
        'desc': 'Seluruh kontainer telah dikirimkan ke pelabuhan tujuan, pelayaran pun dapat diakhiri.',
        'detail': '<h5><b>Tahap Selesai (Terminal Point Symbol)</b></h5><div class="text-center"><img src="assets/img/detail/start.png" /></div><div class="text-left">Merupakan simbol flowchart yang digunakan untuk mendefinisikan suatu awal dan akhirnya suatu algoritma.</br></br><a href="https://yulisopianti.staff.telkomuniversity.ac.id/apa-itu-flowchart/">https://yulisopianti.staff.telkomuniversity.ac.id/apa-itu-flowchart/</a></div>',
        'img': 'assets/img/step/end.png',
        'color': '#8c1822',
        'scsimg': 'assets/img/success/end.png',
        'msg': 'tahap <b>Selesai</b>, Seluruh kontainer telah dikirimkan ke pelabuhan tujuan, pelayaran pun dapat diakhiri.'
    },
    'proses-it' : {
        'title': 'Proses',
        'desc': 'Proses memidahkan kontainer ke dalam kapal kecil melalui jalur sungai, yang nantinya akan dipindahkan ke kapal besar.',
        'detail': '<h5><b>Tahap Proses (Processing Symbol)</b></h5><div class="text-center"><img src="assets/img/detail/process.png" /></div><div class="text-left">Merupakan simbol flowchart yang digunakan untuk melakukan proses (deklarasi , inisialisasi ,dan proses - proses lainnya) pada suatu algoritma.</br></br><a href="https://yulisopianti.staff.telkomuniversity.ac.id/apa-itu-flowchart/">https://yulisopianti.staff.telkomuniversity.ac.id/apa-itu-flowchart/</a></div>',
        'img': 'assets/img/step/proses-it.png',
        'color': '#9900cc',
        'scsimg': 'assets/img/success/proses-it.png',
        'msg': 'tahap <b>Proses</b>, tahap memidahkan kontainer ke dalam kapal kecil melalui jalur sungai, yang nantinya akan dipindahkan ke kapal besar satu persatu.'
    },
    'condition' : {
        'title': 'Kondisi',
        'desc': 'Proses pengecekan jumlah kontainer sampai mencapai 60 buah di dalam kapal besar.',
        'detail': '<h5><b>Tahap Keputusan (Decision Symbol)</b></h5><div class="text-center"><img src="assets/img/detail/condition.png" /></div><div class="text-left">Merupakan simbol flowchart yang digunakan untuk melakukan suatu percabangan alur , apabila arah arus / flow direction symbol kembali lagi ke tahap ini , maka hal tersebut dapat diartikan sebagai sebuah perulangan dan akan dieksekusi sampai kondisi sudah tidak terpenuhi</br></br><a href="https://yulisopianti.staff.telkomuniversity.ac.id/apa-itu-flowchart/">https://yulisopianti.staff.telkomuniversity.ac.id/apa-itu-flowchart/</a></div>',
        'img': 'assets/img/step/condition.png',
        'color': '#9900cc',
        'scsimg': 'assets/img/success/condition.png',
        'msg': 'tahap <b>Kondisi</b>, tahap pengecekan jumlah kontainer sampai mencapai 60 buah di dalam kapal besar.'
    },
}

key = {
    'example' : [
        'start',
        'input',
        'proses-seq',
        'output',
        'end'
    ],
    'test' : {
        'loopdo':[
            'start',
            'input',
            'condition',
            'proses-it',
            'output',
            'end'
        ],
        'doloop':[
            'start',
            'input',
            'proses-it',
            'condition',
            'output',
            'end'
        ]
    }
}

i = 0;

    function setPagination() {
        if(i==0){
            // $('.step .up').css('opacity','0'); 
            $('.step .up').hide();
        }else if(i+1 == data.steps.length){
            // $('.step .down').css('opacity','0'); 
            $('.step .down').hide();
        }else{
            // $('.step .up').css('opacity','1'); 
            // $('.step .down').css('opacity','1'); 
            $('.step .up').show();
            $('.step .down').show();
        }
    }

    function next() {
        setAlert(800);
        setTimeout(function() {
            i++;
            setPagination();
            validateSteps(type);
            $('.langkah').html(i+1);    
            $('#judul').html(mainData[data.steps[i]].title);    
            $('.step-image').html('<img class="card-img-top" src="'+mainData[data.steps[i]].img+'" alt="">');    
            $('.step-text .card-text').html(mainData[data.steps[i]].desc);    
            $('#page').html(i+1+'/'+data.steps.length);
            $('.start-game .header .card-body ').css({'border-left': 'solid 10px '+mainData[data.steps[i]].color}); 
            $('.detail-content').html(mainData[data.steps[i]].detail);

            // setSlideTime(12000);
        }, 700);
    }
    
    function prev() {
        setAlert(600);
        setTimeout(function() {
            i--;
            setPagination();
            validateSteps(type);
            $('.langkah').html(i+1);    
            $('#judul').html(mainData[data.steps[i]].title);    
            $('.step-image').html('<img class="card-img-top" src="'+mainData[data.steps[i]].img+'" alt="">');    
            $('.step-text .card-text').html(mainData[data.steps[i]].desc);    
            $('#page').html(i+1+'/'+data.steps.length);
            $('.start-game .header .card-body ').css({'border-left': 'solid 10px '+mainData[data.steps[i]].color}); 
            $('.detail-content').html(mainData[data.steps[i]].detail); 

            // setSlideTime(12000);
        }, 500);
    }

    function setAlert(delayTime) {
        $('.generate-modal').modal('show');
        setTimeout(function() { $(".generate-modal").modal('hide'); }, delayTime);
    }

    function setError() {
        $('.error-modal').modal('show');
    }

    function setGameover() {
        $('.gameover-modal').modal('show');
    }

    console.log(data.steps[i]);
    var win = 1;
    var fail = 0;
    var type = "";

    function validateSteps(type) {
        setTimeout(function() { 
            if(type == "example"){
                
                if(data.steps[i] == key.example[i]){
                    if(data.steps[i] == 'output'){
                        successModal(mainData[data.steps[i]].scsimg,i,mainData[data.steps[i]].msg,'svg');
                    }else{
                        successModal(mainData[data.steps[i]].scsimg,i,mainData[data.steps[i]].msg,'png');
                        if(i == data.steps.length-1 && data.steps[data.steps.length-1] == 'end' && fail == 0 && win == 1){
                            setTimeout(function() { 
                            $('.win-modal').modal('show');
                            }, 3200);
                            win = 0;
                        }
                    }
                    $('.sign').html('<i class="fas fa-check-circle success-sign"></i>');
                    // $('.step .up').removeClass('disabled');
                    // $('.step .down').removeClass('disabled');
                }else {
                    $('.sign').html('<i class="fas fa-times-circle fail-sign"></i>');
                    setError();
                    fail = 1;
                    
                    // $('.step .up').addClass('disabled');
                    // $('.step .down').addClass('disabled');
                }
            }else if(type == "doloop"){
                
                if(data.steps[i] == key.test.doloop[i]){
                    if(data.steps[i] == 'output'){
                        successModal(mainData[data.steps[i]].scsimg,i,mainData[data.steps[i]].msg,'svg');
                    }else{
                        successModal(mainData[data.steps[i]].scsimg,i,mainData[data.steps[i]].msg,'png');
                        if(i == data.steps.length-1 && data.steps[data.steps.length-1] == 'end' && fail == 0 && win == 1){
                            setTimeout(function() { 
                            $('.win-modal').modal('show');
                            }, 3200);
                            win = 0;
                        }
                    }
                    $('.sign').html('<i class="fas fa-check-circle success-sign"></i>');
                    // $('.step .up').removeClass('disabled');
                    // $('.step .down').removeClass('disabled');
                }else {
                    $('.sign').html('<i class="fas fa-times-circle fail-sign"></i>');
                    setError();
                    fail = 1;
                    
                    // $('.step .up').addClass('disabled');
                    // $('.step .down').addClass('disabled');
                }
            }else if(type == "loopdo"){
                if(data.steps[i] == key.test.loopdo[i]){
                    if(data.steps[i] == 'output'){
                        successModal(mainData[data.steps[i]].scsimg,i,mainData[data.steps[i]].msg,'svg');
                    }else{
                        successModal(mainData[data.steps[i]].scsimg,i,mainData[data.steps[i]].msg,'png');
                        if(i == data.steps.length-1 && data.steps[data.steps.length-1] == 'end' && fail == 0 && win == 1){
                            setTimeout(function() { 
                            $('.win-modal').modal('show');
                            }, 3200);
                            win = 0;
                        }
                    }
                    $('.sign').html('<i class="fas fa-check-circle success-sign"></i>');
                    // $('.step .up').removeClass('disabled');
                    // $('.step .down').removeClass('disabled');
                }else {
                    $('.sign').html('<i class="fas fa-times-circle fail-sign"></i>');
                    setError();
                    fail = 1;
                    
                    // $('.step .up').addClass('disabled');
                    // $('.step .down').addClass('disabled');
                }
            }
         }, 400);
        
    }


    function hideModal(params) {
        $("."+params).modal('hide');
    }

    function successModal(img,langkah,keterangan,type) {
        $('.weight').html((data.berat*60));
        if(type == 'svg'){
            $('.success-modal .svg').show();
            $('.success-modal .success-image').hide();
        }else{
            $('.success-modal .svg').hide();
            $('.success-modal .success-image').show();
            $('.success-modal .success-image').attr('src',img);  
        }
        $('.success-modal .langkah').html(langkah+1);  
        $('.success-modal .keterangan').html(keterangan);  
        $('.success-modal').modal('show'); 
    }

    function setSlideTime(time) {
        if(i+1 != data.steps.length){
            setTimeout(function() { 
                next();
             }, time);
        }
        
    }

$(document).ready(function(){
    setAlert(1200);
    setPagination();

    switch (data.type) {
        case 'example':
            type = "example";
            $('.langkah').html(i+1);    
            $('#judul').html(mainData[data.steps[i]].title);    
            $('.step-image').html('<img class="card-img-top" src="'+mainData[data.steps[i]].img+'" alt="">');    
            $('.step-text .card-text').html(mainData[data.steps[i]].desc);    
            $('#page').html(i+1+'/'+data.steps.length);
            $('.start-game .header .card-body ').css({'border-left': 'solid 10px #ff6600'}); 
            $('.detail-content').html(mainData[data.steps[i]].detail) ;

            console.log(mainData[data.steps[i]].detail);
            
            validateSteps(type);
            // setSlideTime(12000);
            break;
        case 'test': 
            
            if(data.loop == "loopdo"){
                type = "loopdo";
                $('.langkah').html(i+1);    
                $('#judul').html(mainData[data.steps[i]].title);    
                $('.step-image').html('<img class="card-img-top" src="'+mainData[data.steps[i]].img+'" alt="">');    
                $('.step-text .card-text').html(mainData[data.steps[i]].desc);    
                $('#page').html(i+1+'/'+data.steps.length);
                $('.start-game .header .card-body ').css({'border-left': 'solid 10px #ff6600'}); 
                $('.detail-content').html(mainData[data.steps[i]].detail) ; 
                validateSteps(type);
                // setSlideTime(12000);
            }else if(data.loop == "doloop"){
                type = "doloop";
                $('.langkah').html(i+1);    
                $('#judul').html(mainData[data.steps[i]].title);    
                $('.step-image').html('<img class="card-img-top" src="'+mainData[data.steps[i]].img+'" alt="">');    
                $('.step-text .card-text').html(mainData[data.steps[i]].desc);    
                $('#page').html(i+1+'/'+data.steps.length);
                $('.start-game .header .card-body ').css({'border-left': 'solid 10px #ff6600'});  
                $('.detail-content').html(mainData[data.steps[i]].detail) ;
                validateSteps(type);
                // setSlideTime(12000);
            }
            break;
    
        default:
            break;
    }
});