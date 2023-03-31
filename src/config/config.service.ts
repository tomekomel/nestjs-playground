import { Inject, Injectable } from '@nestjs/common';
import { EnvConfig } from './interfaces';
import * as path from 'path';
import * as fs from 'fs';
import * as dotenv from 'dotenv';

@Injectable()
export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor(@Inject('CONFIG_OPTIONS') private options: Record<string, any>) {
    /*** TypeScript Playground ***/
    const configProps = { folder: 'test' };
    configProps.folder = 'test7';

    const req = { url: "https://example.com", method: "GET" } as const;
    // req.url = 'www';
    /*** End of TypeScript Playground ***/

    const filePath = `${process.env.NODE_ENV || 'development'}.env`;
    const envFile = path.resolve(
      __dirname,
      '../../src/',
      options.folder,
      filePath,
    );
    this.envConfig = dotenv.parse(fs.readFileSync(envFile));
  }

  get(key: string): string {
    return this.envConfig[key];
  }
}
