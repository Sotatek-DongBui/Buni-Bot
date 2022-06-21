export interface IPayloadGithub {
  action: string;
  number: number;
  pull_request: {
    html_url: string;
    state: string;
    title: string;
    merged: boolean;
    user: {
      login: string;
    };
    head: {
      ref: string;
    };
    base: {
      ref: string;
    };
  };
  sender: {
    login: string;
  };
  repository: {
    name: string;
  };
}
