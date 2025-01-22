/// <reference lib="webworker" />

import { BehaviorSubject, catchError, first, firstValueFrom, of, switchMap } from "rxjs";

addEventListener('message', ({data}) => {
  const subj = new BehaviorSubject<boolean>(true)
  subj.next(data.needFetch)

  firstValueFrom(subj).then(
    ok =>           fetch('https://jsonplaceholder.typicode.com/todos/' + data.id, {
      headers: {
        "Content-Type": "application/hson"
      },
      method: "GET"
    }).then(res => res.json())
    .then(res => postMessage({res, msg: "Hello"}))
  )

  // subj.pipe(
  //   first(), 
  //   switchMap(ok => {
  //       if (ok) {

  //       }
  //       return of(null)}
  //   ),
  //   catchError(err => {
  //     postMessage(err)
  //     return of(err)
  //   })
  //   ).subscribe()
});
