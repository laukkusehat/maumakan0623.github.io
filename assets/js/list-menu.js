$(document).ready(function(){
    read_list_menu()

    document.getElementById("nama-p").value = localStorage.getItem('user');
    document.getElementById("alamat").value = localStorage.getItem('alamat');
    document.getElementById("no-hp").value = localStorage.getItem('noHp');
    document.getElementById("catatan").value = localStorage.getItem('catatan');

});

function read_list_menu() {
    var url = script_url+"?action=list-menu";
   $.getJSON(url, function (json) {
        data =json.records
        data = data.sort((a, b) => {
          if (a.Stok > b.Stok) {
            return -1;
          }
        });
        console.log(data)

        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < data.length; i++) {
            let product = data[i].Product;
            let desc = data[i].Desc;
            let harga = data[i].Harga;
            let menu = data[i].Menu;
            let bahan = data[i].Bahan;
            let stok = data[i].Stok;
            let linkImage = data[i].Image;
      
            var x = document.getElementById("list-menu");
      
            if(menu=='yes'){
              if(stok=='Habis'){
                var myProduct = '<li class="cards__item">';
                    myProduct += '<div class="card">'
                    myProduct += '<div class="card__image" style="background-image: url(' + linkImage +');"></div>'
                    myProduct += '<div class="card__content">'
                    myProduct += '<div class="card__title">' + product +'</div>'
                    myProduct += '<p class="card__text">' + desc +'</p>'
                    myProduct += '<p class="card__text"><span style="margin-right:5%; font-size: 13pt; font-weight: 700;">Rp. ' + harga.toLocaleString('id-ID') +'</span></p>'
                    myProduct += '<p class="card__text habis">Habis</h4></p>'
                    myProduct += '</div></div></li>'
                    x.innerHTML += myProduct
                
              }else {
                var myProduct = '<li class="cards__item">';
                    myProduct += '<div class="card">'
                    myProduct += '<div class="card__image" style="background-image: url(' + linkImage +');"></div>'
                    myProduct += '<div class="card__content">'
                    myProduct += '<div class="card__title">' + product +'</div>'
                    myProduct += '<p class="card__text">' + desc +'</p>'
                    myProduct += '<p class="card__text"><span style="margin-right:5%; font-size: 13pt; font-weight: 700;">Rp. ' + harga.toLocaleString('id-ID') +'</span></p>'
                    myProduct += '<a href=\"#0\" class=\"cd-add-to-cart js-cd-add-to-cart\" data-price=\"'+ harga +'\" data-product=\"'+ product +'\" data-bahan=\"'+ bahan +'\">'
                    myProduct += 'Add to Cart'
                    myProduct += '</a>'
                    myProduct += '</div></div></li>'
                    x.innerHTML += myProduct
              }
            }
      
          }
          
          generatz()

          $(".load-list").remove();
    });
}
