import { StopMonitoring } from "../domain/stopMonitoring";
import { request } from "../utils/request";

export async function fetchStopMonitoring(
  agency: string
): Promise<StopMonitoring> {
  const resp = await request(
    `https://api.511.org/transit/StopMonitoring?agency=${agency}&format=json`
  );

  return resp as StopMonitoring;
}
