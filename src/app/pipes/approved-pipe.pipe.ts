import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'approvedPipe'
})
export class ApprovedPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return (value === null)? "Not Yet reviewed": (value)? "Approved":"Denied";
  }

}
