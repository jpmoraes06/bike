function Button () {
    Swal.fire({
        title: "Deseja adicionar no carrinho?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Sim",
        denyButtonText: `Não`
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Adicionado!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Cancelado", "", "info");
        }
      });
}