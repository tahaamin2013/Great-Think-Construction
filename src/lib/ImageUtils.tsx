// src/lib/ImageUtils.ts
import { getPlaiceholder } from "plaiceholder";
import fs from 'fs/promises';
import path from 'path';

export async function getBlurPlaceholder(src: string): Promise<string> {
  try {
    // Assuming src is a path relative to the public directory
    const file = await fs.readFile(path.join(process.cwd(), 'public', src));
    const { base64 } = await getPlaiceholder(file);
    return base64;
  } catch (error) {
    console.error("Error generating blur placeholder:", error);
    // Return a default blur data URL instead of null
    return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==";
  }
}