import { BasicImageProcessor } from "./service/BasicImageProcessor";
import { BorderImageProcessor } from "./service/BorderImageProcessor";
import { WaterMarkImageProcessor } from "./service/WaterMarkImageProcessor";

/*
  Nosso sistema tem um processador de imagens básico que realiza operações simples.
  Inicialmente, utilizamos diretamente a classe BasicImageProcessor para processar uma imagem.
*/
let imageProcessor = new BasicImageProcessor();


/*
  Surgiu uma nova demanda: adicionar uma marca d'água às imagens processadas, quando necessário.
  Utilizando o padrão Decorator, criamos uma nova classe que estende a funcionalidade do processador de imagens, 
  através de composição recursiva.
*/
imageProcessor = new WaterMarkImageProcessor(imageProcessor, "Minha Marca d'Água");


/*
  Outra nova demanda: adicionar uma borda às imagens processadas.
  Podemos facilmente criar outro decorator para essa funcionalidade, sem modificar as classes existentes.
*/
imageProcessor = new BorderImageProcessor(imageProcessor);


/*
  Agora, ao processar a imagem, ela passará por todas as camadas de processamento:
  1. Processamento básico
  2. Adição da marca d'água
  3. Adição da borda

  Além disso, cada funcionalidade está encapsulada em sua própria classe, podemos mudar a ordem de execução ou
  remover alguma camada facilmente.
*/
imageProcessor.processImage("decorator/images/BasicImage.jpg");