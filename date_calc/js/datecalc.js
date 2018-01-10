function test(){
    try{
        
        var elDate = document.getElementById('date');
        var content = document.getElementsByClassName('content')[0];
        var alElement = content.getElementsByClassName('alert')[0];
        var insBlock = document.getElementById('accordion');
        
        if (elDate.value != ''){
            console.log(elDate.value);
            alElement.remove();
            for(var i=0;i<12;i++){
                insBlock.innerHTML += '\
                    <div class="card"> \
                        <div class="card-header" role="tab" id="headingOne"> \
                            <h5 class="mb-0"> \
                                <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne"> \
                                    Январь \
                                </a> \
                            </h5> \
                        </div> \
                        <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion"> \
                            <div class="card-body"> \
                                <table class="table table-hover"> \
                                    <tr> \
                                        <td class="date">01.01.2017</td> \
                                        <td>Дневная</td> \
                                    </tr> \
                                    <tr> \
                                        <td>02.01.2017 - 03.01.2017</td> \
                                        <td>Ночная</td> \
                                    </tr> \
                                    <tr> \
                                        <td>06.01.2017</td> \
                                        <td>Дневная</td> \
                                    </tr> \
                                </table> \
                            </div> \
                        </div> \
                    </div>';
                };

        } else{
            alElement.setAttribute('class', 'btn btn-warning btn-sm btn-block calc');
            alElement.innerText = 'Сначала укажите дату!';
        }
    }
    catch (e) {
        console.log('error =(');
    }

}

var calc = document.getElementsByClassName('calc')[0]
calc.onclick = test;