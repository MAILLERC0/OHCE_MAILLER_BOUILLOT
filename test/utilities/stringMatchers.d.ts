declare global {
    namespace jest {
        interface Matchers<R> {
            checkLastLine() : R;
        }
    }
}

export {};
