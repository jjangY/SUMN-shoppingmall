const saleUlTag = document.querySelector('.sale')
let result = productArray.map(product=>{
    return `<li>
                <a href="#">
                    <figure><img src="./img/${product.pthumbFileName}" alt="${product.pname}"></figure>
                    <div class="sale-txt">
                        <h4 class="title-1">${product.pname}</h4>
                        <p class="desc-1">${product.pdesc}</p>
                        <div class="pay-frame">
                            <div class="pay-orginal">
                                <span>${formatPrice(product.price)}</span>원
                            </div>
                            <div class="pay-discount">
                                <div class="discount">${(product.pdiscount*100)}%</div>
                                <div class="pay"><b>${formatPrice(product.price*product.pdiscount)}</b>원</div>
                            </div>
                        </div>
                        <span class="like-badge noab"><img src="./img/likes-1.svg" alt="${product.plike}">87</span>
                    </div>
                </a>
            </li>`
}).join('')

saleUlTag.innerHTML = result

function formatPrice(number) {
    return Number(number).toLocaleString('ko-KR')
}
