import { Entity } from './entity';
import { UniqueEntityID } from './unique-entity-id';

export abstract class AggregateRoot<T> extends Entity<T> {
  // here is where we would add domain events
  // private _domainEvents: IDomainEvent[] = [];
  get id(): UniqueEntityID {
    // the reason for the `_` below is to allow adding an `id` property
    // to the concrete class implementing this abstract class
    return this._id;
  }
}
