import { Injectable } from '@angular/core';
import { HttpClient, HubConnection, HubConnectionBuilder, IHttpConnectionOptions, LogLevel } from '@microsoft/signalr'

@Injectable({
  providedIn: 'root'
})
export class NegotiateSignalRService {

  private hubConnection!: HubConnection;
  private connectionUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor() { }

  public connect = () => {
    this.startConnection();
    this.addListeners();
  }
  token: any
  private getConnection(): HubConnection {
    const options: IHttpConnectionOptions = {
      accessTokenFactory: () => {
        return this.token
      }
    };
    return new HubConnectionBuilder()
      .withUrl(this.connectionUrl, options)
      .configureLogging(LogLevel.Trace)
      .build();
  }
  private startConnection() {
    this.hubConnection = this.getConnection();
    this.hubConnection.start()
      // .then((res) => //console.log('connection started', res))
      // .catch((err) => //console.log('error while establishing signalr connection: ', err))
      // .then(() => //console.log(this.hubConnection.connectionId));
  }
  private addListeners() {

    this.hubConnection.on("MethodName", (data: any) => {
     // //console.log(`DATA >> `, data);

    });
  }


}
