const KEY_BD = '@usarios'

var listaRegistros = {
    ultimoIdGerado: 0,
    usuarios:[]
}

var FILTRO = ''

function gravarBD(){
    localStorage.setItem(KEY_BD, JSON.stringify(listaRegistros))
}

function lerBD(){
    const data = localStorage.getItem(KEY_BD)
    if(data){
        listaRegistros = JSON.parse(data)
    }
    renderizar()

}

function pesquisar(value){
        FILTRO = value;
        renderizar()
}

function renderizar(){
    const tbody = document.getElementById('UserRegisterBody')
    if(tbody){
       var data = listaRegistros.usuarios;
       if(FILTRO.trim()){
        const expReg = eval(`/${FILTRO.trim().replace(/[^\d\w]+/g,'.*')}/i`)
        data = data.filter(usuario =>{
            return expReg.test(usuario.nome) || expReg.test(usuario.email) 
        })
       }
    data = data
        .sort( (a, b) => {
            return a.nome < b.nome ? -1 : 1
        })
        .map(usuario => {
            return `<tr>
                    <td>${usuario.id}</td>
                    <td>${usuario.nome}</td>
                    <td>${usuario.email}</td>
                    <td>
                        <button onclick='visualizar("register", false, ${usuario.id})'>Editar</button>
                        <button class='vermelho' onclick= "perguntarSeDeleta(${usuario.id})">Deletar</button>
                    </td>
                    </tr>`
        })

    }  tbody.innerHTML = data.join('')
}

function insertUsuario(nome, email){
    const id = listaRegistros.ultimoIdGerado + 1;
    listaRegistros.ultimoIdGerado = id;
    listaRegistros.usuarios.push({
        id, nome, email, senha, cbStatus
    })
    gravarBD()
    renderizar()
    visualizar('list')

}

function editUsuario(id, nome, email, senha){
    var usuario = listaRegistros.usuarios.find(usuario => usuario.id == id)
    usuario.email = email;
    usuario.nome = nome;
    usuario.senha = senha;
    gravarBD()
    renderizar()
    visualizar('list')
}

function deleteUsuario(id){
    listaRegistros.usuarios = listaRegistros.usuarios.filter(usuario =>{
        return usuario.id != id
    })
    gravarBD()
    renderizar()

}

function perguntarSeDeleta(id){
    if(confirm('Deseja deletar o usuário com com id = ' + id)){
        deleteUsuario(id)
        renderizar()
    }
}

function limparUsuario(){
    document.getElementById('id').value = '' 
    document.getElementById('nome').value = ''
    document.getElementById('email').value = ''
    document.getElementById('senha').value = ''
    document.getElementById('cbStatus').value = ''
   
}

function visualizar(pagina, novo=false, id=null){
    document.body.setAttribute('page',pagina)
    if (pagina === 'register'){
        if(novo) limparUsuario()
        if(id){
            const usuario = listaRegistros.usuarios.find(usuario => usuario.id == id)
            if(usuario){
                document.getElementById('id').value = usuario.id
                document.getElementById('nome').value = usuario.nome
                document.getElementById('email').value = usuario.email
                document.getElementById('senha').value = usuario.senha
                document.getElementById('cbStatus').value = usuario.cbStatus

            }
        }
        document.getElementById('nome').focus()
    }
}

function submeter(e){
    e.preventDefault()
    const data = {
        id: document.getElementById('id').value,
        nome: document.getElementById('nome').value,
        email: document.getElementById('email').value,
        senha: document.getElementById('senha').value,
        cbStatus: document.getElementById('cbStatus').value,
        
    }
    console.log("data")
    if(data.id){
        editUsuario(data.id, data.nome, data.email, data.senha, data.cbStatus)
    }else{ 
        insertUsuario(data.nome, data.email, data.senha, data.cbStatus)
    }

}

window.addEventListener('load', () =>{
    lerBD()
    document.getElementById('UserRegister').addEventListener('submit', submeter)
    document.getElementById('inputPesquisa').addEventListener('keyup', e =>{
        pesquisar(e.target.value)
    })

})