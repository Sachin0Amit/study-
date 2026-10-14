'use client'

import RecurrenceExplorer from '@/components/interactives/recurrence-explorer'
import RelationExplorer from '@/components/interactives/relation-explorer'
import GraphPlayground from '@/components/interactives/graph-playground'
import TreeTraversal from '@/components/interactives/tree-traversal'
import LogicGates from '@/components/interactives/logic-gates'
import FsmSimulator from '@/components/interactives/fsm-simulator'

export default function DevPreview() {
  return (
    <div className="flex flex-col gap-16 bg-background p-6">
      <RecurrenceExplorer />
      <RelationExplorer />
      <GraphPlayground />
      <TreeTraversal />
      <LogicGates />
      <FsmSimulator />
    </div>
  )
}
