export function findNodeById(
  id: string,
  currentNode: chrome.bookmarks.BookmarkTreeNode
): chrome.bookmarks.BookmarkTreeNode | undefined {
  if (currentNode.id === id) {
    return currentNode;
  }

  if (currentNode.children) {
    for (const child of currentNode.children) {
      const found = findNodeById(id, child);
      if (found) return found;
    }
  }

  return undefined;
}
