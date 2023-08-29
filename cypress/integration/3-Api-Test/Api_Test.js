///<reference types="cypress" />

const API_URL = Cypress.env('API_BASE_URL')

describe('Testes APIREST', () => {
   
    it('Teste Error 404 Not Found', () => {
        cy.request({
            method:'GET',
            url: 'http://localhost:3000/tarefas/60',
            failOnStatusCode: false           
        }).should(({status, body})=>{
            expect(status).to.eq(404)
            expect(body).to.eq("Tarefa não encontrada")
        
        })
      })
    it('Teste Inserindo Registro na API POST', () => {
        cy.request('POST', `${API_URL}`, {descricao: 'Programação Web 2', concluida: false }).then(
            (response) => {
                //response.body é serializado automaticamente no JSON
                expect(response.body).to.have.property('descricao', 'Programação Web 2', 'concluida',false)
            })
            
    })

    it('Teste Inserindo Registro na API POST Verificando Propriedades body', () => {
        cy.request('POST', `${API_URL}`, {         
          descricao: "Linguagem de Programação", 
          concluida: true 
        }).then((response) => {
          expect(response.status).to.eq(200); // verifica o status da resposta
          expect(response.body).to.have.property('descricao', 'Linguagem de Programação')
          expect(response.body).to.have.property('concluida', true)
        })
      })

      it('Teste Atualizando Registro 1 Da API method PUT', () => {
        cy.request('PUT', 'http://localhost:3000/tarefas/1', { descricao: 'Programação Web 3', concluida: false }).then(
            (response) => {
                //response.body é serializado automaticamente no JSON
                expect(response.body).to.have.property('descricao', 'Programação Web 3', 'concluida',false) // true
            })
            
      })
      
      /*it('Teste Deletando Registro DELETE', () => {
        cy.request({
          method: 'DELETE',
          url: 'http://localhost:3000/tarefas/1',
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(200) // verifica o status da resposta
          expect(response.body).to.eq('Tarefa excluída com sucesso') // verifica a mensagem de sucesso esperada
        })
      })*/

      it('Verificando Item Adicionado GET', () => {
        cy.request({
            method:'GET',
            url: 'http://localhost:3000/tarefas/2',
            failOnStatusCode: false//é definida como false, o teste não falhará automaticamente se o código de status da resposta não estiver na faixa 2xx ou 3xx. 
            //Isso significa que mesmo se a resposta tiver um código de status que indique um erro do cliente (4xx) ou um erro do servidor (5xx), 
            //o teste ainda continuará a ser executado. Isso pode ser útil em situações em que você deseja testar como seu aplicativo lida com respostas de erro.       
        }).should(({status, body})=>{
            const{id,descricao,concluida} = body
            expect(status).to.eq(200)
            expect(id).to.eq(2)
            expect(descricao).to.eq("Linguagem de Programação")
            expect(concluida).to.eq(true)
        })
      })

      it('Deve retornar erro ao inserir tarefa sem descrição', () => {
        cy.request({
          method: 'POST',
          url: `${API_URL}`,
          body: { 
            concluida: true 
          },
          failOnStatusCode: false
        }).then((abdf) => {
          expect(abdf.status).to.eq(400); // verifica o status da resposta
          expect(abdf.body).to.eq('"descricao" is required'); // verifica a mensagem de erro esperada
        })
      })

      it('Deve retornar erro ao inserir tarefa com descrição menor que 3 caracteres', () => {
        cy.request({
          method: 'POST',
          url: 'http://localhost:3000/tarefas',
          body: { 
            descricao: 'LP', 
            concluida: true 
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(400) 
          expect(response.body).to.eq('"descricao" length must be at least 3 characters long') 
        })
      })

      it('Deve retornar erro ao buscar tarefa com ID inválido', () => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:3000/tarefas/-1',
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(400)
          expect(response.body).to.eq('"value" must be a positive number')
        })
      })

      it('Deve retornar erro ao alterar tarefa com ID inválido', () => {
        cy.request({
          method: 'PUT',
          url: 'http://localhost:3000/tarefas/-1',
          body: { 
            descricao: 'Teste Alteração', 
            concluida: true 
          },
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(400)
          expect(response.body).to.eq('"value" must be a positive number')
        })
      })

    it('Retorna erro ao tentar atualizar uma tarefa inexistente', () => {
        // Tenta atualizar uma tarefa inexistente
        cy.request({
          method: 'PATCH',
          url: 'http://localhost:3000/tarefas/123456',
          failOnStatusCode: false
        }).then((response) => {
          expect(response.status).to.eq(404)
        })
      })

      it('Verifica se a rota /tarefas responde com status 200 e sem corpo', () => {
        cy.request({
          method: 'HEAD',
          url: 'http://localhost:3000/tarefas'
        }).then((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.be.empty
        })
      })
    
})

