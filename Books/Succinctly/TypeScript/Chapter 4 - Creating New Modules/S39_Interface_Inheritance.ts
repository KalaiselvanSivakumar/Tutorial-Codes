interface IMover {
    move(): void;
}

interface IShaker {
    shake(): void;
}

interface IMoveShaker extends IMover, IShaker {} // Unlike classes, interfaces can extend from multiple interfaces

class MoveShaker implements IMoveShaker {
    move(): void {};
    shake(): void {};
}
