describe("Ao iniciar o jogo", function() {
  it("Antes de chamar iniciar, jogadores não devem existir", function() {
    jogo = {};
    expect(jogo.jogador1).toBe(undefined);
    expect(jogo.jogador2).toBe(undefined);
  });

  it("Deve existir um array placar", function() {
    var placarTeste = [0,15, 30, 40, 'v', 'w'];
    for(var i=0; i<placar.length; i++)
      expect(placar[i]).toBe(placarTeste[i]);
  });

  it("Após chamar iniciar, jogadores devem existir", function() {
    iniciar();
    expect(jogo.jogador1).not.toBe(undefined);
    expect(jogo.jogador2).not.toBe(undefined);
  });
  it("Deve existir a variavel vencedor", function(){
    expect(vencedor).not.toBe(undefined);
  });

  it("Deve existir uma variavel posição dentro de cada jogador", function() {
    expect(jogo.jogador1.pontos).not.toBe(undefined);
    expect(jogo.jogador2.pontos).not.toBe(undefined);
  });

  it("Deve existir uma funcao para iniciar o jogo", function() {
    expect(iniciar).not.toBe(undefined);
  });
  it("Deve existir uma variavel global de jogo", function() {
    expect(jogo).not.toBe(null);
  });
  it("Deve existir um jogador1", function() {
    expect(jogo.jogador1).not.toBe(undefined);
  });  
  it("Deve existir um jogador2", function() {
    expect(jogo.jogador2).not.toBe(undefined);
  });
  it("No inicio o jogador1 deve ter posiçao 0", function() {
    expect(jogo.jogador1.pontos).toBe(0);
  });  
  it("No inicio o jogador2 deve ter posiçao 0", function() {
    expect(jogo.jogador2.pontos).toBe(0);
  });    
});

describe("Após iniciar o jogo", function() {
  beforeEach(function() {    
    iniciar();  
  });
  it("Deve existir uma funcao para marcar pontos", function(){
    expect(marcarPontos).not.toBe(undefined);
  });
  
  
  it("Deve existir uma funcao para verificar se há empate em 40", function(){
    expect(empate_40).not.toBe(undefined);
  });
  it("O retorno da funcao empate deve ser false se os pontos forem diferentes de 40", function(){
    
    expect(empate_40(jogo.jogador1, jogo.jogador2)).toBe(false);
  });

  it("Deve existir uma funcao retorne pontos", function(){
    expect(getPontos).not.toBe(undefined);
  });
  it("A funcao marcar pontos deve receber um jogador1 como parametro", function(){
    marcarPontos(jogo.jogador1,jogo.jogador2);
    expect(jogo.jogador1.pontos).toBe(1);
  });
  it("A funcao marcar pontos deve receber um jogador2 como parametro", function(){
    marcarPontos(jogo.jogador2,jogo.jogador1);
    expect(jogo.jogador2.pontos).toBe(1);
  });

  it("No inicio do jogo, vencedor deve ser zero", function(){
    vencedor=10;
    iniciar();
    expect(vencedor).toBe(0);
  });

  it("A funcao empate40 deve retornar true quando tiver empatado em 40", function(){
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    var empate = empate_40(jogo.jogador1, jogo.jogador2);
    expect(empate).toBe(true);
  });

  it("Se nao estiver empatado, deve ir para w", function(){
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    expect(jogo.jogador2.pontos).toBe(5);
  });

  it("Se estiver empatado, deve ir para v", function(){
    iniciar();
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    expect(jogo.jogador2.pontos).toBe(4);
  });

  it("se um jogador estiver na vantagem e marcar pontos ele ganha", function(){
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    expect(jogo.jogador2.pontos).toBe(5);
  });

  it("se um jogador quiser entrar na vantagem e o outro também, ambos vão para 40", function(){
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    marcarPontos(jogo.jogador1,jogo.jogador2);
    expect(jogo.jogador1.pontos).toBe(3);
    expect(jogo.jogador2.pontos).toBe(3);

  });


  it("se alguem ganhou, nao marcar pontos", function(){
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador1,jogo.jogador2);
    marcarPontos(jogo.jogador2,jogo.jogador1);
    expect(jogo.jogador2.pontos).toBe(0);
    expect(jogo.jogador1.pontos).toBe(5);
  }); 

 


  


})
