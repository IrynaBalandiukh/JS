// callback

function wakeUp(amAwake, callback) {
    setTimeout(() => {
        if (amAwake) {
            callback(null, 'I am awake' );
        } else {
            callback('oversleeeeeep', null)
        }
    }, 5000)
}

function breakfast(hadBreakfast, callback) {
    setTimeout(() => {
        if (hadBreakfast) {
            callback(null, 'Have breakfast');
        } else {
            callback('no energy', null)
        }
    }, 4000)
}

let money = 100;
function goWork(jobIsDone, callback) {
    setTimeout(() => {
        if (jobIsDone) {
            console.log('Go to work');
            money += 500;
            callback(null, money);
        } else {
            callback('no money', null)
        }
    }, 5000)
}

function shopping(money, callback) {
    setTimeout(() => {
        if (money >500) {
            callback(null, 'Buy something');
        } else {
            callback('empty shopping bags',null)
        }
    }, 3000)
}

function lessons(studying, callback) {
    setTimeout(() => {
        if (studying) {
            console.log('Learn JS');
            callback();
        }
    }, 4000)
}

function rest(takeARest) {
    setTimeout(() => {
        if (takeARest) {
            console.log('Take a rest');
        } else {
            console.log('very tired')
        }
    }, 2000)
}

wakeUp(true, (err, data) =>{
    if (err) {
        console.error(err)
    } else {
        console.log(data);
        breakfast(false,(err1, data1) => {
            if (err1) {
                console.error(err1)
            } else {
                console.log(data1);
                goWork(true, (err2, payment) => {
                    if (err2) {
                        console.error(err2)
                    } else {
                        shopping(payment,(err3, data3) => {
                            if (err3) {
                                console.error(err3)
                            } else {
                                console.log(data3)
                                lessons(true, () => {
                                    rest(true);
                                });
                            }
                        });
                    }
                });
            }
        });
    }
});

// then

function wakeUp1(amAwake) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amAwake) {
                console.log('I am awake' );
                resolve('I am awake. New day');
            } else {
                console.log('oversleeeeeep');
                reject('Oops oversleep');
            }
        }, 5000)
    })
}

function breakfast1(hadBreakfast, dish) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (hadBreakfast) {
                console.log('Have breakfast');
                resolve(dish);
            } else {
                console.log('no energy');
                reject('no energy, I`m hungry');
            }
        }, 4000)
    })
}

let money1 = 100;
function goWork1(jobIsDone) {
   return new Promise((resolve, reject) => {
       setTimeout(() => {
           if (jobIsDone) {
               console.log('Go to work');
               money1 += 500;
               resolve(money1);
           } else {
               console.log('no money');
               reject('no money((');
           }
       }, 5000)
   })
}

function shopping1(money, buy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money >500) {
                console.log( 'Buy something');
                resolve(buy);
            } else {
                console.log('empty shopping bags');
                reject('not enough money');
            }
        }, 3000)
    })
}

function lessons1(studying) {
    return new Promise(resolve => {
        setTimeout(() => {
            if (studying) {
                console.log('study hard');
                resolve('Learn JS');
            }
        }, 4000)
    })
}

function rest1(takeARest, kindOfRest) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (takeARest) {
                console.log('Take a rest');
                resolve(kindOfRest)
            } else {
                console.log('very tired');
                reject('go to sleep');
            }
        }, 2000)
    })
}

wakeUp1(true)
    .then(wakedUp => {
            console.log(wakedUp);
            return  breakfast1(true, 'mivina')
    })
    .then (myBreakfast =>{
        console.log(myBreakfast);
        return goWork1(true);
    })
    .then(payment => {
        console.log(payment);
        return shopping1(payment, 'sweater');
    })
    .then(buy => {
        console.log(buy);
        return lessons1(true);
    } )
    .then(knowledge =>{
        console.log(knowledge);
        return rest1(true, 'painting');
    })
    .then(kindOfRest =>
    console.log(kindOfRest)
    );

async function MyDay() {
    const wakedUp = await wakeUp1(true);
    console.log(wakedUp);
    const myBreakfast = await breakfast1(true,'plov');
    console.log(myBreakfast);
    const payment = await goWork1(true);
    console.log(payment);
    const buy = await shopping1(payment, 'book');
    console.log(buy);
    const knowledge = await lessons1(true);
    console.log(knowledge);
    const kindOfRest = await rest1(true, 'yoga');
    console.log(kindOfRest);
}
MyDay();