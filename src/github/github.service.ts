import { Injectable } from '@nestjs/common';
import { IPayloadGithub } from 'interfaces/payload-github';

@Injectable()
export class GithubService {
  private _buildHeaders = (payload: IPayloadGithub) => {
    const { action } = payload;

    return {
      title: 'Github Bot',
      subtitle: action,
      imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgRV_cdgW7a3tevLgJsiKWmTYQUWus08uFMxmC5CZfHHBulp883_CX7L6r-HGnhxE0LE&usqp=CAU`,
      imageStyle: 'IMAGE',
    };
  };

  private _buildSections = (payload: IPayloadGithub) => {
    const { pull_request, repository, sender, action } = payload;
    const { title, state, html_url, base, head, user, merged } = pull_request;
    const { name } = repository;
    const prAction = merged ? 'merged' : action;

    const actionColors = {
      closed: '#ff0000',
      opened: '#2eeb15',
      merged: '#9b16d9',
    };
    return {
      widgets: [
        {
          textParagraph: {
            text: [
              `<b>Project:</b> <font color="#ff0000">${name}</font>`,
              `<b>Title:</b> <font color="#2eeb15">${title}</font>`,
              `<b>Author:</b> ${user.login}`,
              `<b>Update by:</b> ${sender.login}`,
              `<b>Action:</b> <font color="${actionColors[prAction] ?? '#168ed9'}">${prAction}</font>`,
              `<i>Branch:</i> <font color="#0000ff">${head.ref} -> ${base.ref}</font>`,
            ].join('<br>'),
          },
        },
        {
          keyValue: {
            topLabel: `Status`,
            content: state,
            contentMultiline: 'false',
            onClick: {
              openLink: {
                url: html_url,
              },
            },
          },
        },
      ],
    };
  };

  buildGitHubWebhookMessage = (payload: IPayloadGithub) => {
    const data = {
      cards: [
        {
          header: this._buildHeaders(payload),
          sections: [this._buildSections(payload)],
        },
      ],
    };

    return data;
  };
}
