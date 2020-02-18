
class PrintNumbers {
  private static final var MAX_LIMIT = 100
  private static final var FIRST_NUMBER_REPLACED = 3
  private static final var SECOND_NUMBER_REPLACED = 5
  private static final var MULTIPLE_REPLACED = FIRST_NUMBER_REPLACED * SECOND_NUMBER_REPLACED
  private static final var BLUE_BLACK ="BlueBlack"
  private static final var BLUE="Blue"
  private static final var BLACK="Black"


  public static function printNumbers(){
    for(i in 1..MAX_LIMIT){
      if(i%MULTIPLE_REPLACED == 0){
        print(BLUE_BLACK)
        continue
      } else if(i%SECOND_NUMBER_REPLACED==0){
        print(BLACK)
        continue
      } else if(i%FIRST_NUMBER_REPLACED==0){
        print(BLUE)
        continue
      }else {
        print(i +" ")
      }

    }

  }

}