import { ConfigService } from "./config.service";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HelpConfig {
  constructor(private configService: ConfigService) {}

  public get BASE_API(): string | null {
    return this.configService.getUrl("CONSULTA", "URL");
  }

}
