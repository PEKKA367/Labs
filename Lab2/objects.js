function fn () {
    const constObject = { name: 'ConstantName' };
    let letObject = { name: 'LetName' };

    constObject.name = 'NewConstantName';
    letObject.name = 'NewLetName';

    console.log(constObject.name);
    console.log(letObject.name);
    
    constObject = { name: 'AnotherName' };
    console.log(constObject.name);

}

fn();