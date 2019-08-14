import mergeDefs from "../lib/mergeDefs";

describe('mergeDefs', () => {
  it('should return a schema from string', () => {
    const query = `type Query {
  hello: string
}`;
    const def = mergeDefs(query);
    expect(def).toMatch(/hello: string/)
  })
})
