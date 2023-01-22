// Write a programe that prints the firts 50 Fibbonaci's numbers, starting in 0

// 0, 1, 1, 2, 3, 5...

function fibbo(): void {
    let n1 = 0;
    let n2 = 1;

    for (let i = 0; i < 50; i++) {
        console.log(n1);
        let tmp = n1 + n2;
        n1 = n2;
        n2 = tmp;
    }
}

fibbo();
