$(document).ready(function () {
    $(".logout").click(function () {
        var cikisOnay = confirm("Çıkış yapmak istiyor musunuz?");

        if (cikisOnay) {
            $(".logout").attr("href", "anasayfaSignless.html");
            alert("Çıkış yapıldı.");

        } else {
            $(".logout").attr("href", "#");

        }

    });
});