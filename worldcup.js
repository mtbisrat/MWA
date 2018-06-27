const{ fromEvent, from,of }=rxjs;
const{map,debounceTime,filter}=rxjs.operators;

const data=fetch('https://raw.githubusercontent.com/lsv/fifa-worldcup-2018/master/data.json');

let arrayOfTeams=[];

             data.then(data=>data.json())
              .then(data => {
                  const allTeams=data.teams;

                  from(allTeams)
                                    .pipe(
                                        filter(team => team.id <5)
                                    ).subscribe(team => 
                                       arrayOfTeams.push(team)
                                    )      
              from(arrayOfTeams)
              .pipe(
                  map(singleTeam => singleTeam)
              )
              .subscribe(singleTeam => {
                  $('#tableBody')
                      .append($('<tr>')
                              .append($('<td>')
                                      .append($('<div>')
                                              .append($('<img>', {
                                                      'src': singleTeam.flag,
                                                      'height': '15px',
                                                      'width': '20px'
                                                  })
                                              )
                                              .append($('<span>', {
                                                      'text': " " + singleTeam.name
                                                  })
                                              )
                                      )
                              )
                      )
              })
      
            })
            .catch((err) => {console.error(err);})

    var input = fromEvent(document.querySelector('input'), 'input');

    input
        .pipe(
      
            debounceTime(1000),
            map(event => event.target.value)
        )
        .subscribe(value => {
            if(value){
                value = value.toLowerCase();
                $("#tableBody tr").filter(function() {
                    console.log($(this).text().toLowerCase());
                    
                  $(this).toggle($(this).text().toLowerCase().indexOf(value) === 1)
                });
            }
        });