const inputPhone = document.getElementById("phone")

inputPhone.addEventListener('input', function() {
    let value = this.value.replace(/\D/g, "");
    const length = value.length;

    if (length > 0) {
      value = '(' + value;
    }

    if (length > 2) {
      value = value.slice(0, 3) + ') ' + value.slice(3);
    }

    if (length > 8) {
      value = value.slice(0, 10) + '-' + value.slice(10);
    }

    this.value = value;
});