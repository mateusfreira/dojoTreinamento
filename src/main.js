var jogo = {};
var placar = [0,15, 30, 40, 'v', 'w'];
var vencedor = 0;
var iniciar = function(){
	jogo = {
		jogador1 : {
			pontos : 0
		},
		jogador2 : {
			pontos : 0
		}
	};
	vencedor = 0;
};

var getPontos = function(jogador){
	return placar[jogador.pontos];
};

var empate_40 = function(j1, j2){
	if(j1.pontos==3&&j2.pontos==3) return true;
	return false;

};

var marcarPontos = function(jogador, adversario) {
	if(vencedor === 0) {
		if(jogador.pontos==3) {
			if(empate_40(jogador, adversario))
				jogador.pontos++;
			else if(jogador.pontos==3 && adversario.pontos==4){
				jogador.pontos = 3;
				adversario.pontos = 3;
			}	
			else { 
				jogador.pontos = 5;
				vencedor = jogador;
			}

		}
		
		else jogador.pontos++;
	}
};