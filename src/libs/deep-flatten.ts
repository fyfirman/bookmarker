interface FlattenableObject {
  children?: FlattenableObject[];
}

const deepFlatten = <T extends FlattenableObject>(members: T[]): T[] => {
  let children: T[] = [];
  const flattenMembers = members.map((m) => {
    if (m.children?.length) {
      children = [...children, ...m.children] as any;
    }
    return m;
  });

  return flattenMembers.concat(
    children.length ? deepFlatten(children) : children
  );
};

export default deepFlatten;
