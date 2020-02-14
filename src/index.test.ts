function classDecorator(...args: any[]) {
    console.log(args, 'classDecorator')
}

function methodDecorator(...args: any[]) {
    console.log(args, 'methodDecorator')
}

@classDecorator
class IndexTest {

    @methodDecorator
    testMethod() {}
}