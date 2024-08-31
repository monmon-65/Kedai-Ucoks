document.addEventListener('alpine:init', () => {
    Alpine.data('order', () => ({
        items: [
            { id: 1, name: 'Sacoks', img: '1.jpg', price: 8000 },
            { id: 2, name: 'Ucok Stail', img: '2.jpg', price: 6000 },
        ],
    }));

    Alpine.store("cart", {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
            console.log(newItems);
        }
    });
});

// konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(number);
  };