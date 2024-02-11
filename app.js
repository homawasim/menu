const menu = [
    {
        id: 1,
        title: "Pizza",
        category: "snack",
        price: "500",
        img: "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*",
        desc: " pizza is a dish of Italian origin . ",

    },
    {
        id: 2,
        title: "burger",
        category: "snack",
        price: "200",
        img: "https://mrbrownbakery.com/image/images/rEyMLsj21Ooxk5mfhdeh7bSevaLGzUtczWXVDj4u.jpeg?p=full",
        desc: "ped into a round shape.",

    },
    {
        id: 3,
        title: "puri chola",
        category: "breakfast",
        price: "100",
        img: "https://theindianclaypot.com/content/images/wp-content/uploads/2018/11/chole-poori-1.jpg",
        desc: "yummy delicious chola puri",

    },
    {
        id: 4,
        title: "chicken wings",
        category: "dinner",
        price: "500",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThG5xyZ10te2ry40eLyN0LrXzMFCCe1bjSEw&usqp=CAU",
        desc: "yummy too tasty",

    },
    {
        id: 5,
        title: "chicken tikka",
        category: "lunch",
        price: "200",
        img: "https://www.flavorquotient.com/wp-content/uploads/2020/04/Chicken-Tikka-FQ-4-1-of-1.jpg",
        desc: " yummy too tasty ",

    },
]
const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");
window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
});

function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        // console.log(item);

        return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);

    sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ["all"]
    );
    const categoryBtns = categories
        .map(function (category) {
            return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
        })
        .join("");

    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            // console.log(e.currentTarget.dataset);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(function (menuItem) {
                // console.log(menuItem.category);
                if (menuItem.category === category) {
                    return menuItem;
                }
            });
            if (category === "all") {
                diplayMenuItems(menu);
            } else {
                diplayMenuItems(menuCategory);
            }
        });
    });
}