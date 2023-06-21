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
        // ADD JSON DATA TO THE TABLE AS ROWS.
        for (var i = 0; i < json.records.length; i++) {
            let product = json.records[i].Product;
            let desc = json.records[i].Desc;
            let harga = json.records[i].Harga;
            let menu = json.records[i].Menu;
            let bahan = json.records[i].Bahan;
            let stok = json.records[i].Stok;
            let linkImage = json.records[i].Image;
      
            var x = document.getElementById("list-menu");
      
            if(menu=='yes'){
              if(stok=='Habis'){
                var myProduct = '<div class="card border-secondary" style="min-width: 50%;">';
                    myProduct += '<img class="card-img-top" src="assets/img/product/' + linkImage +'" alt="Card image cap">'
                    myProduct += '<div class="card-body">'
                    myProduct += '<h5 class="card-title">' + product +'</h5>'
                    myProduct += '<p class="card-text">' + desc +'</p>'
                    myProduct += '<p class="card-text text-right card-header" style="font-weight: 600; font-size: 21pt;">Habis</p>'
                    myProduct += '</div></div>'
                  x.innerHTML += myProduct
                
              }else {
                var myProduct = '<div class="card border-secondary" style="min-width: 50%;">';
                    myProduct += '<img class="card-img-top" src="assets/img/product/' + linkImage +'" alt="Card image cap">'
                    myProduct += '<div class="card-body">'
                    myProduct += '<h5 class="card-title">' + product +'</h5>'
                    myProduct += '<p class="card-text">' + desc +'</p>'
                    myProduct += '<p class="card-text text-right card-header"><span style="margin-right:5%; font-size: 21pt; font-weight: 700;">Rp. ' + harga.toLocaleString('id-ID') +'</span> <a href=\"#0\" class=\"cd-add-to-cart js-cd-add-to-cart\" data-price=\"'+ harga +'\" data-product=\"'+ product +'\" data-bahan=\"'+ bahan +'\">'
                    myProduct += 'Add to Cart'
                    myProduct += '</a></p>'
                    myProduct += '</div></div>'
                  x.innerHTML += myProduct
                // x.innerHTML +=
                // "<tr>" +
                //   "<td>" + product + "</td>" +
                //   "<td>Rp. " + harga.toLocaleString('id-ID') + "</td>" +
                //   "<td>" + "<a href=\"#0\" class=\"cd-add-to-cart js-cd-add-to-cart\" data-price=\""+harga+"\" data-product=\""+product+"\" data-bahan=\""+bahan+"\">"+
                //   "Add to Cart"
                //   +"</a>" + "</td>" +
                // "</tr>";
              }
            }
      
          }
          
          generatz()

          $(".load-list").remove();
    });
}
