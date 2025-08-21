let barbeiroDB = [];

export default class AdmRepository {
  listar() {
    return barbeiroDB;
  }

  novoBarbeiro(barbEntidade) {
    barbeiroDB.push(barbEntidade);
    return true;
  }

  procurarId(id){
    let admID = barbeiroDB.filter(x => x.id == id);
    return admID.length > 0;
  }

  deletarBarbeiro(id){
    barbeiroDB = barbeiroDB.filter(x => x.id != id);
  }

  atualizarDados(entidadeAtualizada){
    barbeiroDB.forEach((adm, index) => {
        if(adm.id == entidadeAtualizada.id){
            barbeiroDB[index] = entidadeAtualizada
        }
    })
  }

}
