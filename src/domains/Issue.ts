export class Issue {
  private readonly _issueNumber: number;
  private readonly _title: string;
  private readonly _body: string;

  constructor(issueNumber: number, title: string, body: string) {
    this._issueNumber = issueNumber;
    this._title = title;
    this._body = body;
  }

  public get issueNumber() {
    return this._issueNumber;
  }

  public get title() {
    return this._title;
  }

  public get body() {
    return this._body;
  }
}
