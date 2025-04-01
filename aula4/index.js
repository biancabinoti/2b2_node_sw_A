const inquirer = require('inquirer')
const chalk = require('chalk')

const fs = require('fs')

function operation(){
    inquirer.Prompt(
        {
            type:'list',
            name:'action',
            messagem:'Escolha uma das opçoes do menu: ',
            choices:[
                'criar conta',
                'consultar saldo',
                'depositar',
                'sacar',
                'sair',
            ]
        }
    })then ((answer) => {
            const action = answer['action']
            if(action === 'Criar conta'){
            console. log ( 'Criando a conta...')
            Jelse if(action === 'Consultar saldo'){felse if(action === 'Consultar saldo'){
                console. log( 'Consultando saldo...
                else if(action === 'Depositar'){
                console. log ('Deposintado... ')
                else if(action === 'Sacar'){
                console. log ('Retirndo saque...')
                else if(action === 'Sair'){
                onsole. log ('Saindo do sistema..')
                else{
                console. log ('Opicao Invalida!')
    }
            })
}