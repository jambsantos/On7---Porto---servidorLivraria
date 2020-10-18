# Projeto-Prático-Livraria - PUT-PATCH
## Atividade Semana10  

#### Desenvolvimento em aula
Vamos dar continuidade ao projeto desenvolvido durante as aulas de GET, POST e DELETE.

#### Exercícios
Vamos dar continuidade ao nosso projeto da livraria.

1 - Para os livros, crie um método em que será possível a atualização do campo Nome utilizando o método HTTP PUT.

2 - Para os livros, crie um método em que será possível a atualização do campo Nome utilizando o método HTTP PATCH.

3 - Para os funcionários, crie um método em que será possível a atualização do campo Nome utilizando o método HTTP PUT.

4 - Para os funcionários, crie um método em que será possível a atualização do campo Nome utilizando o método HTTP PATCH.

- Exercício proposto: criação de controle de servidor para livros e funcinários de uma livraria com controles de adição, exclusão e quantidade dos itens.  

### :memo: Briefing GET - POST - DELETE

Você foi contratada para fazer a implementação de um sistema de uma livraria no centro de Recife. 

1 - A contratante espera que no sistema ela possa fazer a inclusão de seu estoque contendo as seguintes informações: 

> Livros: {

    "id":
    
    "nome":
    
    "autor":
    
    "categoria":
    
    "quantidade": 
    
    "formatoDigital": (booleano) }

2 - A mesma livraria decidiu integrar um sisteminha em que será possível a adição de seus funcionários. A contratante espera que no sistema ela possa fazer a inclusão dos dados de cada um deles, contendo:

> Funcionarios: {

    "id":
    
    "nome": 
    
    "idade":
    
    "setor":
    
    "funcao":
    
    "data da admissão" 
    
    "aniversario:  }

3 - Nossa livraria gostaria de garantir que será possível a exclusão do registro de determinado livro.

4 - Eles também desejam que seja possível a exclusão do registro de um funcionário. 

5 - Nossa contatante espera que seja possível o acesso a uma lista completa com todos os livros do estoque.

6 - Eles também adorariam ter acesso a uma lista com todos os funcionários.

7 - Seria de grande valia se nossa livaria tivesse acesso a uma lista com todos os livros por categoria. 

8 - A livaria gostaria de ter acesso a idade de um funcionário, de acordo com seu id. 

**Observação:** Popule nosso model de livros e funcionários com pelo menos 10 registros em cada.
