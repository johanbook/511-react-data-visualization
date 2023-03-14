import { Operators } from "../domain/operators";
import { request } from "../utils/request";

export async function fetchOperators(): Promise<Operators> {
  const resp = await request(
    `https://api.511.org/transit/gtfsoperators?format=json`
  );

  return resp as Operators;
}
