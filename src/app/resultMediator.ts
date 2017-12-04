export class ResultMediator {

static queezResult: string[];

static setQueezResult(result: string[]): void {
  ResultMediator.queezResult = result;
  }

static getQueezResult(): string[] {
    return ResultMediator.queezResult;
  }
}
