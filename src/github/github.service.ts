import { Injectable } from '@nestjs/common';
import { configs } from 'config';
import { IPayloadGithub } from 'interfaces/payload-github';

@Injectable()
export class GithubService {
  private _buildHeaders = (payload: IPayloadGithub) => {
    const { repository } = payload;
    const { name } = repository;

    return {
      title: 'Github Bot',
      subtitle: name,
      imageUrl: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgRV_cdgW7a3tevLgJsiKWmTYQUWus08uFMxmC5CZfHHBulp883_CX7L6r-HGnhxE0LE&usqp=CAU`,
      imageStyle: 'IMAGE',
    };
  };

  private _buildSections = (payload: IPayloadGithub) => {
    const { pull_request, sender, action } = payload;
    const { title, state, html_url, base, head, user, merged } = pull_request;
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
          ...(merged && this._buildMergeBtn(payload)),
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

  private _getProject = (repoName: string) => {
    switch (repoName) {
      case 'buni-api-islands':
        return 'island';
      default:
        throw new Error();
    }
  };

  private _buildMergeBtn = (payload: IPayloadGithub) => {
    const { repository, pull_request } = payload;
    const { name } = repository;
    const { base } = pull_request;
    const { ref } = base;
    return {
      buttons: {
        textButton: {
          text: 'Merge dev',
          onClick: {
            action: {
              openLink: { url: `${configs.host}/dev/${this._getProject(name)}?branch=${ref}` },
            },
          },
        },
      },
    };
  };
}
