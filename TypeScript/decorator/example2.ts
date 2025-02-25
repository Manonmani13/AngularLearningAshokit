function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        console.log(`Calling ${propertyKey} method with arguments ${args.join(', ')}`);
        const result = originalMethod.apply(this, args);
        console.log(`Result: ${result}`);
        return result;
    };
}

class Calculators {
    @logMethod
    add(a: number, b: number) {
        const result = a + b;
        return result;
    }

    subtract(a: number, b: number) {
        const result = a - b;
        return result;
    }
}

const calculator1 = new Calculators();
calculator1.add(5, 3);  // This will trigger the decorator
calculator1.add(7, 2);  // This will trigger the decorator
