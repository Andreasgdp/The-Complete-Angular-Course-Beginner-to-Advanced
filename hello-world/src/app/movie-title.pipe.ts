import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'movie_title'
})
export class MovieTitlePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    var wordList: Array<string> = value.split(' ')
    
    var finalWordList: Array<string> = []

    for (let index = 0; index < wordList.length; index++) {
      const element: string = wordList[index];
      var newElement: string

      if (index === 0) {
        newElement = this.capitalizeFirstLetter(element)
      } else {
        if (element.toLowerCase() === 'of' || element.toLowerCase() === 'the') {
          newElement = element
        } else {
          newElement = this.capitalizeFirstLetter(element)
        }
      }
      finalWordList.push(newElement)
    }
    
    var finalString: string = '';
    for (let index = 0; index < finalWordList.length; index++) {
      const element = finalWordList[index];
      finalString = finalString + ` ${element}`
    }
    
    return finalString;
    
    
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

}
