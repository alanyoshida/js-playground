// IIFE - Immediately Invoked Function Expression
// Serve para criar um contexto de execução e proteger as Variaveis / Funcoes / Obj e nao deixar elas em contexto global.
;(function(global, $) {
    
    // 'new' gera um objeto vazio. 
    // Esse é o metodo construtor, que chama outro metodo o: init e retorna o objeto.
    var PluginName = function(variable1, variable2) {
        // Isso faz com que o plugin possa ser usado sem precisar ficar dando new
        return new PluginName.init(variable1, variable2);   
    }
    
    // Essas variaveis estao escondidas do escopo global por estar dentro de IIFE e não sao nunca diretamente acessadas
    var variable1, variable2;
    
    // prototype contem os metodos (para salvar espaço em memoria)
    PluginName.prototype = {
        
        // o 'this' se refere ao objeto gerado pelo new no contexto de execucao
        functionName: function() {
            return this.variable1;
        },
        
        functionName2: function() {
             return this.variable2;
        },
    };
    
    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    PluginName.init = function(variable1, variable2) {
        
        // Essa linha é um bom hábito porque voce nao confunde o this com outro this caso precise usar ele dentro de outro objeto
        var self = this;

        // Se a variavel nao foi definida, ou nao foi passada o valor padrao é string vazia
        self.variable1 = variable1 || '';
        self.variable2 = variable2 || '';
        
    }
    
    // Pega o prototype do objeto que seriam os metodos que criamos e passa pro prototype do init que é o metodo construtor
    PluginName.init.prototype = PluginName.prototype;
    
    // Cria um objeto Global onde o plugin possa ser chamado, ou um atalho P$ parecido com a forma que o jQuery usa $
    global.PluginName = global.P$ = PluginName;
    
// Chamada da funcão passando as variaveis globais para dentro da funcao, para poder ser acessada. Observe que window vira a variabvel global.    
}(window, jQuery));

// EX de uso do plugin
var plugin = P$('texto1', 'texto2');
var texto1 = plugin.functionName();