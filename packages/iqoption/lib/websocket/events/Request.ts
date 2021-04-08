import { BaseEventRequest, OptionalSpread } from '../../types'

export abstract class Request<Message = any, Args = undefined>
  implements BaseEventRequest<Message, Args> {
  public abstract get name(): string

  public abstract build(...args: OptionalSpread<Args>): Promise<Message>
}
