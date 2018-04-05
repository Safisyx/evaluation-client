export const getLastColors = (students) => {
  const colors = students.map(student => {
      const ev = student.evaluations
      if (ev.length>0)
        return ev[ev.length-1].code
      return 'inherit'
    })
  return colors
}

export const getColorPercentage = (colors, color:string) => {
  const p = colors.length===0? 0: colors.filter(c=>c===color).length*100
         /colors.length
  return Math.round(p*100)/100
}
