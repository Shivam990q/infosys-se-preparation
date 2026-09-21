import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Folder, Video, FileText, CheckCircle2, ChevronRight, 
  ArrowLeft, Search, Play, ExternalLink, Download,
  Layers, Clock, File, Award, X, Sparkles, Filter,
  LayoutGrid, List as ListIcon, Plus, ChevronDown, 
  BookOpen, Eye, Check, RefreshCw
} from 'lucide-react';

const AVAILABLE_COURSES = [
  {
    id: '844567',
    name: 'NEW Infosys -SE , DSE & SP -Updated Pattern + PYQ + Infosys test Series with Video sol',
    shortName: 'Infosys SE, DSE & SP (844567)',
    targetRole: 'Infosys Systems Engineer & Specialist Programmer',
    tag: 'Active Course',
    status: 'loaded',
    dataPath: '/data/course_explorer.json'
  },
  {
    id: 'tcs_nqt',
    name: 'TCS NQT National Qualifier Test Master Preparation Vault',
    shortName: 'TCS NQT All-in-One Prep',
    targetRole: 'TCS Ninja & Digital Roles',
    tag: 'Coming Soon Slot',
    status: 'slot',
    dataPath: null
  },
  {
    id: 'cognizant_genc',
    name: 'Cognizant GenC Next & Elevate Comprehensive Practice Track',
    shortName: 'Cognizant GenC Next',
    targetRole: 'Cognizant GenC / Next',
    tag: 'Coming Soon Slot',
    status: 'slot',
    dataPath: null
  }
];

export default function CourseExplorer({ onLaunchTest }) {
  const [activeCourseId, setActiveCourseId] = useState('844567');
  const [courseData, setCourseData] = useState(null);
  const [currentFolder, setCurrentFolder] = useState(null);
  const [breadcrumb, setBreadcrumb] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  // View mode: 'tiles' (grid cards) or 'list' (compact table rows)
  const [viewMode, setViewMode] = useState(() => localStorage.getItem('prepDash_courseViewMode') || 'tiles');
  
  // Filter: 'all', 'folders', 'videos', 'docs', 'tests'
  const [typeFilter, setTypeFilter] = useState('all');
  
  // Sort: 'default', 'name_asc', 'name_desc'
  const [sortOrder, setSortOrder] = useState('default');
  
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);
  const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Persist view mode preference
  const handleSetViewMode = (mode) => {
    setViewMode(mode);
    localStorage.setItem('prepDash_courseViewMode', mode);
  };

  useEffect(() => {
    setLoading(true);
    fetch('/data/course_explorer.json')
      .then(res => res.json())
      .then(data => {
        setCourseData(data);
        if (data && data.tree) {
          setCurrentFolder(data.tree);
          setBreadcrumb([{ id: 'root', name: 'Root Content', node: data.tree }]);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load course explorer data:', err);
        setLoading(false);
      });
  }, [activeCourseId]);

  const navigateToFolder = (subfolder) => {
    setCurrentFolder(subfolder);
    setBreadcrumb(prev => [...prev, { id: subfolder.id, name: subfolder.name, node: subfolder }]);
    setSearchQuery('');
  };

  const navigateToBreadcrumb = (index) => {
    const target = breadcrumb[index];
    setBreadcrumb(prev => prev.slice(0, index + 1));
    setCurrentFolder(target.node);
    setSearchQuery('');
  };

  const navigateUp = () => {
    if (breadcrumb.length > 1) {
      navigateToBreadcrumb(breadcrumb.length - 2);
    }
  };

  // Global search across all items in active course
  const allItems = useMemo(() => {
    if (!courseData || !courseData.tree) return [];
    const list = [];
    function collect(node, pathStr) {
      const currentPath = pathStr ? `${pathStr} > ${node.name}` : node.name;
      for (const v of node.videos) list.push({ ...v, folderName: node.name, fullPath: currentPath, itemType: 'video' });
      for (const d of node.documents) list.push({ ...d, folderName: node.name, fullPath: currentPath, itemType: 'pdf' });
      for (const t of node.tests) list.push({ ...t, folderName: node.name, fullPath: currentPath, itemType: 'test' });
      for (const s of node.subfolders) collect(s, currentPath);
    }
    collect(courseData.tree, '');
    return list;
  }, [courseData]);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return null;
    const q = searchQuery.toLowerCase().trim();
    let res = allItems.filter(item => 
      item.name.toLowerCase().includes(q) || 
      (item.description && item.description.toLowerCase().includes(q)) ||
      item.folderName.toLowerCase().includes(q)
    );
    if (typeFilter !== 'all') {
      res = res.filter(item => {
        if (typeFilter === 'videos') return item.itemType === 'video';
        if (typeFilter === 'docs') return item.itemType === 'pdf';
        if (typeFilter === 'tests') return item.itemType === 'test';
        return true;
      });
    }
    return res;
  }, [searchQuery, allItems, typeFilter]);

  // Current folder items with filters & sorting
  const { filteredSubfolders, filteredVideos, filteredDocs, filteredTests } = useMemo(() => {
    if (!currentFolder) {
      return { filteredSubfolders: [], filteredVideos: [], filteredDocs: [], filteredTests: [] };
    }

    let subs = [...currentFolder.subfolders];
    let vids = [...currentFolder.videos];
    let docs = [...currentFolder.documents];
    let tsts = [...currentFolder.tests];

    if (sortOrder === 'name_asc') {
      subs.sort((a, b) => a.name.localeCompare(b.name));
      vids.sort((a, b) => a.name.localeCompare(b.name));
      docs.sort((a, b) => a.name.localeCompare(b.name));
      tsts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === 'name_desc') {
      subs.sort((a, b) => b.name.localeCompare(a.name));
      vids.sort((a, b) => b.name.localeCompare(a.name));
      docs.sort((a, b) => b.name.localeCompare(a.name));
      tsts.sort((a, b) => b.name.localeCompare(a.name));
    }

    if (typeFilter === 'folders') {
      vids = []; docs = []; tsts = [];
    } else if (typeFilter === 'videos') {
      subs = []; docs = []; tsts = [];
    } else if (typeFilter === 'docs') {
      subs = []; vids = []; tsts = [];
    } else if (typeFilter === 'tests') {
      subs = []; vids = []; docs = [];
    }

    return { filteredSubfolders: subs, filteredVideos: vids, filteredDocs: docs, filteredTests: tsts };
  }, [currentFolder, typeFilter, sortOrder]);

  const activeCourse = AVAILABLE_COURSES.find(c => c.id === activeCourseId) || AVAILABLE_COURSES[0];
  const isRoot = breadcrumb.length <= 1;

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-24 text-[var(--theme-text-muted)] space-y-4">
        <div className="w-12 h-12 border-4 border-[var(--theme-bg-accent-solid)] border-t-transparent rounded-full animate-spin" />
        <p className="font-black tracking-widest text-xs uppercase text-[var(--theme-text-primary)]">Loading Courses Library...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-24">
      {/* Sleek Integrated Course Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-3 md:p-4 rounded-2xl glass-card border border-[var(--theme-border)] shadow-md">
        <div className="flex items-center gap-3">
          {/* Multi-Course Switcher Badge & Dropdown */}
          <div className="relative inline-block text-left">
            <button
              onClick={() => setIsCourseDropdownOpen(!isCourseDropdownOpen)}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider bg-[var(--theme-bg-accent-subtle)] text-[var(--theme-text-accent)] border border-[var(--theme-border-accent)] hover:bg-[var(--theme-bg-accent-subtle)]/80 transition-all shadow-sm"
            >
              <Sparkles size={13} />
              <span>{activeCourse.shortName}</span>
              <ChevronDown size={14} className={`transition-transform duration-200 ${isCourseDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Course Selector Dropdown Menu */}
            <AnimatePresence>
              {isCourseDropdownOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute left-0 mt-2 w-80 md:w-96 rounded-2xl glass-card border border-[var(--theme-border-strong)] shadow-2xl p-2 z-50 backdrop-blur-3xl space-y-1.5"
                >
                  <div className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-[var(--theme-text-muted)] border-b border-[var(--theme-border)]">
                    Select Available Course
                  </div>

                  {AVAILABLE_COURSES.map(course => (
                    <button
                      key={course.id}
                      onClick={() => {
                        if (course.status === 'loaded') {
                          setActiveCourseId(course.id);
                        } else {
                          alert(`"${course.name}" is scheduled in this slot. You can add more course directories anytime.`);
                        }
                        setIsCourseDropdownOpen(false);
                      }}
                      className={`w-full text-left p-3 rounded-xl transition-all flex items-start justify-between gap-3 ${
                        activeCourseId === course.id 
                          ? 'bg-[var(--theme-bg-accent-subtle)] border border-[var(--theme-border-accent)]' 
                          : 'hover:bg-[var(--theme-bg-subtle)]'
                      }`}
                    >
                      <div>
                        <div className="font-bold text-xs text-[var(--theme-text-heading)] leading-snug">
                          {course.shortName}
                        </div>
                        <div className="text-[10px] text-[var(--theme-text-muted)] mt-0.5">
                          {course.targetRole}
                        </div>
                      </div>
                      <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-full shrink-0 ${
                        course.status === 'loaded' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)]'
                      }`}>
                        {course.tag}
                      </span>
                    </button>
                  ))}

                  <div className="pt-2 border-t border-[var(--theme-border)]">
                    <button
                      onClick={() => {
                        setIsCourseDropdownOpen(false);
                        setIsAddCourseModalOpen(true);
                      }}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-black uppercase tracking-wider text-[var(--theme-text-accent)] hover:bg-[var(--theme-bg-accent-subtle)] flex items-center justify-center gap-2 transition-colors"
                    >
                      <Plus size={14} /> Add Another Course / Folder Vault
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Stats Pill */}
          {courseData?.totalStats && (
            <div className="hidden sm:flex items-center gap-2 text-xs font-bold text-[var(--theme-text-muted)] bg-[var(--theme-bg-subtle)] px-3 py-1.5 rounded-xl border border-[var(--theme-border)]">
              <span className="text-amber-400 font-mono font-black">{courseData.totalStats.videos}</span> Vids
              <span>•</span>
              <span className="text-rose-400 font-mono font-black">{courseData.totalStats.files}</span> PDFs
              <span>•</span>
              <span className="text-indigo-400 font-mono font-black">{courseData.totalStats.tests}</span> Mocks
            </div>
          )}
        </div>

        {/* Global Search Bar */}
        <div className="relative flex-1 max-w-lg">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--theme-text-muted)]" size={16} />
          <input
            type="text"
            placeholder="Search all videos, PDFs, and tests..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-16 py-2 rounded-xl bg-[var(--theme-bg-input)] border border-[var(--theme-border)] focus:border-[var(--theme-bg-accent-solid)] focus:ring-2 focus:ring-[var(--theme-shadow-accent)] outline-none text-xs font-medium text-[var(--theme-text-primary)] placeholder:text-[var(--theme-text-muted)] transition-all"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-[var(--theme-text-muted)] hover:text-white bg-[var(--theme-bg-subtle)] px-2 py-0.5 rounded transition-colors"
            >
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Control Bar: View Mode Switcher (Tiles vs List) + Filters + Sorting */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-3 md:p-4 rounded-2xl glass-card border border-[var(--theme-border)]">
        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto custom-scrollbar py-1">
          {[
            { id: 'all', label: 'All Items' },
            { id: 'folders', label: `Folders (${currentFolder?.subfolders.length || 0})` },
            { id: 'videos', label: `Videos (${currentFolder?.videos.length || 0})` },
            { id: 'docs', label: `PDFs (${currentFolder?.documents.length || 0})` },
            { id: 'tests', label: `Tests (${currentFolder?.tests.length || 0})` },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setTypeFilter(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                typeFilter === tab.id 
                  ? 'bg-[var(--theme-btn-primary-bg)] text-white shadow-md shadow-indigo-500/20' 
                  : 'bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)] hover:bg-[var(--theme-bg-subtle-hover)]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* View Mode & Sort Buttons */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Sort Selector */}
          <div className="flex items-center gap-1.5 text-xs text-[var(--theme-text-muted)] font-bold">
            <span className="hidden sm:inline">Sort:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-[var(--theme-bg-subtle)] text-[var(--theme-text-primary)] text-xs font-bold py-1.5 px-2.5 rounded-xl border border-[var(--theme-border)] outline-none cursor-pointer"
            >
              <option value="default">Default Order</option>
              <option value="name_asc">Name (A → Z)</option>
              <option value="name_desc">Name (Z → A)</option>
            </select>
          </div>

          <div className="h-5 w-px bg-[var(--theme-border)]" />

          {/* View Mode Toggle: Tiles vs List */}
          <div className="flex items-center gap-1 bg-[var(--theme-bg-subtle)] p-1 rounded-xl border border-[var(--theme-border)]">
            <button
              onClick={() => handleSetViewMode('tiles')}
              title="Tiles / Grid View"
              className={`p-1.5 rounded-lg text-xs transition-all ${
                viewMode === 'tiles' 
                  ? 'bg-[var(--theme-btn-primary-bg)] text-white shadow-sm' 
                  : 'text-[var(--theme-text-muted)] hover:text-white'
              }`}
            >
              <LayoutGrid size={16} />
            </button>
            <button
              onClick={() => handleSetViewMode('list')}
              title="List View"
              className={`p-1.5 rounded-lg text-xs transition-all ${
                viewMode === 'list' 
                  ? 'bg-[var(--theme-btn-primary-bg)] text-white shadow-sm' 
                  : 'text-[var(--theme-text-muted)] hover:text-white'
              }`}
            >
              <ListIcon size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* SEARCH RESULTS MODE */}
      {searchResults ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-black text-[var(--theme-text-heading)]">
              Search Results ({searchResults.length} items found)
            </h2>
            <button 
              onClick={() => setSearchQuery('')}
              className="text-xs font-bold text-[var(--theme-text-accent)] hover:underline"
            >
              Back to Folder View
            </button>
          </div>

          {searchResults.length === 0 ? (
            <div className="p-16 text-center glass-card border border-dashed rounded-3xl text-[var(--theme-text-muted)] font-medium">
              No matching videos, PDFs, or tests found for "{searchQuery}".
            </div>
          ) : viewMode === 'tiles' ? (
            /* Search Tiles View (Upgraded with animations, big typography & rich actions) */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {searchResults.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.3) }}
                  whileHover={{ y: -6, scale: 1.015 }}
                  className="p-5 rounded-3xl glass-card border border-[var(--theme-border)] hover:border-[var(--theme-border-accent)] transition-all flex flex-col justify-between gap-4 group shadow-sm hover:shadow-2xl hover:bg-[var(--theme-bg-subtle)] relative overflow-hidden"
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`w-[52px] h-[52px] rounded-2xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all ${
                      item.itemType === 'video' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white' :
                      item.itemType === 'pdf' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20 group-hover:bg-rose-600 group-hover:text-white' : 
                      'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white'
                    }`}>
                      {item.itemType === 'video' && <Play size={22} className="fill-current ml-0.5" />}
                      {item.itemType === 'pdf' && <FileText size={24} />}
                      {item.itemType === 'test' && <Award size={24} />}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={`text-[10px] uppercase font-black px-2 py-0.5 rounded-full border ${
                          item.itemType === 'video' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                          item.itemType === 'pdf' ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' :
                          'bg-indigo-500/10 text-indigo-400 border-indigo-500/20'
                        }`}>
                          {item.itemType === 'video' ? 'Video Lecture' : item.itemType === 'pdf' ? 'Study PDF' : 'Mock Test'}
                        </span>
                        {item.duration && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-300 font-bold border border-amber-500/30">
                            {item.duration}
                          </span>
                        )}
                      </div>
                      <h3 className="font-black text-base md:text-lg text-[var(--theme-text-heading)] group-hover:text-[var(--theme-text-accent)] transition-colors mt-2 line-clamp-2 leading-snug" title={item.name}>
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-[var(--theme-text-muted)] truncate mt-1">
                        📁 {item.fullPath}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3.5 border-t border-[var(--theme-border)] flex items-center gap-2">
                    {item.itemType === 'pdf' && item.url && (
                      <>
                        <button
                          onClick={() => setSelectedPdf(item)}
                          className="btn-secondary text-xs md:text-sm py-2 px-3.5 flex items-center gap-2 font-bold shadow-sm flex-1 justify-center"
                        >
                          <Eye size={14} /> Instant Preview
                        </button>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-xs md:text-sm py-2 px-3 text-rose-400 hover:text-white hover:bg-rose-600 border-rose-500/30 transition-all shadow-sm"
                          title="Open PDF in new tab"
                        >
                          <ExternalLink size={14} />
                        </a>
                      </>
                    )}
                    {item.itemType === 'video' && item.isLocal && (
                      <button
                        onClick={() => setSelectedVideo(item)}
                        className="btn-primary text-xs md:text-sm py-2.5 px-4 flex items-center justify-center gap-2 font-black shadow-md w-full"
                      >
                        <Play size={14} className="fill-current" /> Watch Lecture
                      </button>
                    )}
                    {item.itemType === 'test' && (
                      <button
                        onClick={() => onLaunchTest && onLaunchTest(item)}
                        className="btn-premium text-xs md:text-sm py-2.5 px-4 flex items-center justify-center gap-2 font-black shadow-md w-full"
                      >
                        <CheckCircle2 size={14} /> Start Mock Test
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            /* Search List View (Upgraded with animations, big font & premium aesthetics) */
            <div className="space-y-3">
              {searchResults.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.3) }}
                  whileHover={{ x: 6, scale: 1.006 }}
                  className="p-4 md:p-5 rounded-2xl glass-card border border-[var(--theme-border)] hover:border-[var(--theme-border-accent)] transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group shadow-sm hover:shadow-xl hover:bg-[var(--theme-bg-subtle)] relative overflow-hidden"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-all ${
                      item.itemType === 'video' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20 group-hover:bg-amber-500 group-hover:text-white' :
                      item.itemType === 'pdf' ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20 group-hover:bg-rose-600 group-hover:text-white' : 
                      'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-600 group-hover:text-white'
                    }`}>
                      {item.itemType === 'video' && <Play size={20} className="fill-current ml-0.5" />}
                      {item.itemType === 'pdf' && <FileText size={22} />}
                      {item.itemType === 'test' && <Award size={22} />}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-sm md:text-base text-[var(--theme-text-heading)] group-hover:text-[var(--theme-text-accent)] transition-colors leading-snug line-clamp-1" title={item.name}>
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        {item.duration && (
                          <span className="text-[10px] md:text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30">
                            {item.duration}
                          </span>
                        )}
                        <span className="text-[10px] md:text-xs text-[var(--theme-text-muted)] truncate max-w-md">
                          📁 {item.fullPath}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0 self-end md:self-center">
                    {item.itemType === 'pdf' && item.url && (
                      <>
                        <button
                          onClick={() => setSelectedPdf(item)}
                          className="btn-secondary text-xs md:text-sm py-2 px-4 flex items-center gap-2 font-bold shadow-sm"
                        >
                          <Eye size={14} /> Instant Preview
                        </button>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-xs md:text-sm py-2 px-3 text-rose-400 hover:text-white hover:bg-rose-600 border-rose-500/30 transition-all shadow-sm"
                        >
                          <ExternalLink size={14} />
                        </a>
                      </>
                    )}
                    {item.itemType === 'video' && item.isLocal && item.url && (
                      <button
                        onClick={() => setSelectedVideo(item)}
                        className="btn-primary text-xs md:text-sm py-2 px-5 flex items-center gap-2 font-bold shadow-md"
                      >
                        <Play size={14} className="fill-current" /> Watch Lecture
                      </button>
                    )}
                    {item.itemType === 'test' && (
                      <button
                        onClick={() => onLaunchTest && onLaunchTest(item)}
                        className="btn-premium text-xs md:text-sm py-2 px-5 flex items-center gap-2 font-black shadow-md"
                      >
                        <Play size={14} className="fill-current" /> Start Mock Test
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* FOLDER NAVIGATION MODE */
        <div className="space-y-6">
          {/* Breadcrumb Navigation Bar */}
          <div className="flex items-center gap-2 text-xs md:text-sm font-bold flex-wrap p-3.5 rounded-2xl bg-[var(--theme-bg-elevated)] border border-[var(--theme-border)] shadow-sm">
            {!isRoot && (
              <button
                onClick={navigateUp}
                className="p-1.5 rounded-xl hover:bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] hover:text-white transition-colors mr-1"
                title="Go Up"
              >
                <ArrowLeft size={16} />
              </button>
            )}
            {breadcrumb.map((crumb, idx) => (
              <React.Fragment key={crumb.id || idx}>
                {idx > 0 && <ChevronRight size={14} className="text-[var(--theme-text-muted)] shrink-0 opacity-40" />}
                <button
                  onClick={() => navigateToBreadcrumb(idx)}
                  className={`hover:underline transition-colors ${
                    idx === breadcrumb.length - 1 
                      ? 'text-[var(--theme-text-accent)] font-black' 
                      : 'text-[var(--theme-text-muted)] hover:text-[var(--theme-text-primary)]'
                  }`}
                >
                  {crumb.name}
                </button>
              </React.Fragment>
            ))}
          </div>

          {/* Subfolders Section */}
          {filteredSubfolders.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xs font-black tracking-wider uppercase text-[var(--theme-text-muted)] flex items-center gap-1.5">
                <Folder size={14} /> Subfolders ({filteredSubfolders.length})
              </h2>

              {viewMode === 'tiles' ? (
                /* Folders Tiles Grid (Upgraded with animations, big typography & rich badges) */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {filteredSubfolders.map((sub, i) => (
                    <motion.div
                      key={sub.id || i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.035 }}
                      whileHover={{ y: -6, scale: 1.015 }}
                      whileTap={{ scale: 0.985 }}
                      onClick={() => navigateToFolder(sub)}
                      className="p-5 rounded-3xl glass-card border border-[var(--theme-border)] hover:border-blue-500/50 cursor-pointer transition-all flex flex-col justify-between gap-4 group shadow-sm hover:shadow-2xl hover:bg-[var(--theme-bg-subtle)] relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-[52px] h-[52px] rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md group-hover:scale-105">
                          <Folder size={26} className="fill-current/20" />
                        </div>
                        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] text-[11px] font-bold text-[var(--theme-text-muted)] group-hover:text-[var(--theme-text-accent)] group-hover:border-[var(--theme-border-accent)] transition-all">
                          <span>Open</span>
                          <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-black text-base md:text-lg text-[var(--theme-text-heading)] group-hover:text-[var(--theme-text-accent)] transition-colors leading-snug line-clamp-2">
                          {sub.name}
                        </h3>
                      </div>

                      <div className="pt-3 border-t border-[var(--theme-border)] flex items-center gap-2 flex-wrap">
                        {sub.stats.videos > 0 && (
                          <span className="text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            {sub.stats.videos} Videos
                          </span>
                        )}
                        {sub.stats.files > 0 && (
                          <span className="text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                            {sub.stats.files} PDFs
                          </span>
                        )}
                        {sub.stats.tests > 0 && (
                          <span className="text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            {sub.stats.tests} Mocks
                          </span>
                        )}
                        {sub.stats.videos === 0 && sub.stats.files === 0 && sub.stats.tests === 0 && (
                          <span className="text-[10px] md:text-xs text-[var(--theme-text-muted)] font-medium">
                            Direct Directory
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* Folders List Mode (Upgraded with animations, big font & premium aesthetics) */
                <div className="space-y-3">
                  {filteredSubfolders.map((sub, i) => (
                    <motion.div
                      key={sub.id || i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.03 }}
                      whileHover={{ x: 6, scale: 1.006 }}
                      whileTap={{ scale: 0.995 }}
                      onClick={() => navigateToFolder(sub)}
                      className="p-4 md:p-5 rounded-2xl glass-card border border-[var(--theme-border)] hover:border-blue-500/50 cursor-pointer transition-all flex items-center justify-between gap-4 group shadow-sm hover:shadow-xl hover:bg-[var(--theme-bg-subtle)] relative overflow-hidden"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-md group-hover:scale-105">
                          <Folder size={22} className="fill-current/20" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-black text-sm md:text-base text-[var(--theme-text-heading)] group-hover:text-[var(--theme-text-accent)] transition-colors truncate">
                            {sub.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                            {sub.stats.videos > 0 && (
                              <span className="text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
                                {sub.stats.videos} Videos
                              </span>
                            )}
                            {sub.stats.files > 0 && (
                              <span className="text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/20">
                                {sub.stats.files} PDFs & DPPs
                              </span>
                            )}
                            {sub.stats.tests > 0 && (
                              <span className="text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                {sub.stats.tests} Mocks
                              </span>
                            )}
                            {sub.stats.videos === 0 && sub.stats.files === 0 && sub.stats.tests === 0 && (
                              <span className="text-[10px] md:text-xs text-[var(--theme-text-muted)] font-medium">
                                Direct Directory
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0">
                        <span className="hidden sm:inline-block text-xs font-bold text-[var(--theme-text-muted)] group-hover:text-[var(--theme-text-heading)] transition-colors">
                          Open Folder
                        </span>
                        <div className="w-9 h-9 rounded-xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] flex items-center justify-center text-[var(--theme-text-muted)] group-hover:text-[var(--theme-text-accent)] group-hover:border-[var(--theme-border-accent)] group-hover:translate-x-1 transition-all">
                          <ChevronRight size={18} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Videos Section */}
          {filteredVideos.length > 0 && (
            <div className="space-y-3 mt-6">
              <h2 className="text-xs font-black tracking-wider uppercase text-amber-400 flex items-center gap-1.5">
                <Video size={14} /> Lecture Videos ({filteredVideos.length})
              </h2>

              {viewMode === 'tiles' ? (
                /* Videos Tiles Grid (Upgraded with animations, big typography & responsive actions) */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {filteredVideos.map((v, i) => (
                    <motion.div 
                      key={v.id || i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.035 }}
                      whileHover={{ y: -6, scale: 1.015 }}
                      className="p-5 rounded-3xl glass-card border border-[var(--theme-border)] hover:border-amber-500/50 transition-all flex flex-col justify-between gap-4 group shadow-sm hover:shadow-2xl hover:bg-[var(--theme-bg-subtle)] relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-[52px] h-[52px] rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-md group-hover:scale-105">
                          <Play size={24} className="fill-current ml-0.5" />
                        </div>
                        <div className="flex items-center gap-1.5 flex-wrap justify-end">
                          <span className="text-[10px] md:text-xs font-mono font-black px-2.5 py-1 rounded-lg bg-amber-500/15 text-amber-300 border border-amber-500/30">
                            {v.duration}
                          </span>
                          <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                            v.isLocal ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' : 'bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] border border-[var(--theme-border)]'
                          }`}>
                            {v.isLocal ? 'Offline HD' : 'DRM'}
                          </span>
                        </div>
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-bold text-base md:text-lg text-[var(--theme-text-heading)] group-hover:text-amber-400 transition-colors leading-snug line-clamp-2" title={v.name}>
                          {v.name}
                        </h3>
                      </div>

                      <div className="pt-3 border-t border-[var(--theme-border)]">
                        {v.isLocal && v.url ? (
                          <button
                            onClick={() => setSelectedVideo(v)}
                            className="btn-primary text-xs md:text-sm py-2.5 px-4 w-full flex items-center justify-center gap-2 font-bold shadow-md hover:shadow-amber-500/20 active:scale-95"
                          >
                            <Play size={14} className="fill-current" /> Watch Lecture
                          </button>
                        ) : (
                          <div className="w-full py-2.5 text-center text-xs font-bold text-[var(--theme-text-muted)] rounded-xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)]">
                            Classplus DRM Protected
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* Videos List Mode (Upgraded with animations, big font & premium aesthetics) */
                <div className="space-y-3">
                  {filteredVideos.map((v, i) => (
                    <motion.div
                      key={v.id || i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.03 }}
                      whileHover={{ x: 6, scale: 1.006 }}
                      className="p-4 md:p-5 rounded-2xl glass-card border border-[var(--theme-border)] hover:border-amber-500/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group shadow-sm hover:shadow-xl hover:bg-[var(--theme-bg-subtle)] relative overflow-hidden"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition-all shadow-md group-hover:scale-105">
                          <Play size={20} className="fill-current ml-0.5" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-[10px] md:text-xs font-mono font-black px-2.5 py-0.5 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30">
                              {v.duration}
                            </span>
                            <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md ${
                              v.isLocal ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30' : 'bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] border border-[var(--theme-border)]'
                            }`}>
                              {v.isLocal ? 'Offline HD Available' : 'Classplus DRM Track'}
                            </span>
                          </div>
                          <h3 className="font-bold text-sm md:text-base text-[var(--theme-text-heading)] group-hover:text-amber-400 transition-colors mt-1.5 leading-snug line-clamp-1" title={v.name}>
                            {v.name}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 shrink-0 self-end md:self-center">
                        {v.isLocal && v.url ? (
                          <button
                            onClick={() => setSelectedVideo(v)}
                            className="btn-primary text-xs md:text-sm py-2 px-5 flex items-center gap-2 font-bold shadow-md hover:shadow-amber-500/20 active:scale-95"
                          >
                            <Play size={14} className="fill-current" /> Watch Lecture
                          </button>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-[var(--theme-text-muted)] px-3 py-1.5 rounded-xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)]">
                              DRM Encrypted
                            </span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Reference Documents / PDFs Section */}
          {filteredDocs.length > 0 && (
            <div className="space-y-3 mt-6">
              <h2 className="text-xs font-black tracking-wider uppercase text-rose-400 flex items-center gap-1.5">
                <FileText size={14} /> Reference PDF Documents & DPPs ({filteredDocs.length})
              </h2>

              {viewMode === 'tiles' ? (
                /* PDFs Tiles Grid (Upgraded with animations, big typography & responsive actions) */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {filteredDocs.map((doc, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.035 }}
                      whileHover={{ y: -6, scale: 1.015 }}
                      className="p-5 rounded-3xl glass-card border border-[var(--theme-border)] hover:border-rose-500/50 transition-all flex flex-col justify-between gap-4 group shadow-sm hover:shadow-2xl hover:bg-[var(--theme-bg-subtle)] relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-[52px] h-[52px] rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-all shadow-md group-hover:scale-105">
                          <FileText size={26} />
                        </div>
                        <div className="flex items-center gap-1.5 flex-wrap justify-end">
                          {doc.size > 0 && (
                            <span className="text-[10px] md:text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-rose-500/15 text-rose-300 border border-rose-500/30">
                              {(doc.size / (1024 * 1024)).toFixed(2)} MB
                            </span>
                          )}
                          <span className="text-[10px] font-bold text-[var(--theme-text-muted)] uppercase tracking-wider px-2 py-0.5 rounded-md bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)]">
                            DPP
                          </span>
                        </div>
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-bold text-base md:text-lg text-[var(--theme-text-heading)] group-hover:text-rose-400 transition-colors leading-snug line-clamp-2" title={doc.name}>
                          {doc.name}
                        </h4>
                      </div>

                      <div className="pt-3 border-t border-[var(--theme-border)] flex items-center gap-2">
                        {doc.url ? (
                          <>
                            <button
                              onClick={() => setSelectedPdf(doc)}
                              className="btn-secondary flex-1 text-xs md:text-sm py-2.5 px-3 flex items-center justify-center gap-2 font-bold shadow-sm hover:border-rose-500/40"
                            >
                              <Eye size={14} /> Instant Preview
                            </button>
                            <a
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary text-xs md:text-sm py-2.5 px-3.5 flex items-center justify-center font-bold text-rose-400 hover:text-white hover:bg-rose-600 border border-rose-500/30 rounded-xl transition-all shadow-sm"
                              title="Open in new browser tab"
                            >
                              <ExternalLink size={14} />
                            </a>
                          </>
                        ) : (
                          <div className="w-full py-2 text-center text-xs font-bold text-[var(--theme-text-muted)]">
                            Catalog Reference Only
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* PDFs List Mode (Upgraded with animations, big font & premium aesthetics) */
                <div className="space-y-3">
                  {filteredDocs.map((doc, i) => (
                    <motion.div
                      key={doc.id || i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.03 }}
                      whileHover={{ x: 6, scale: 1.006 }}
                      className="p-4 md:p-5 rounded-2xl glass-card border border-[var(--theme-border)] hover:border-rose-500/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group shadow-sm hover:shadow-xl hover:bg-[var(--theme-bg-subtle)] relative overflow-hidden"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-400 border border-rose-500/20 flex items-center justify-center shrink-0 group-hover:bg-rose-600 group-hover:text-white transition-all shadow-md group-hover:scale-105">
                          <FileText size={22} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-bold text-sm md:text-base text-[var(--theme-text-heading)] group-hover:text-rose-400 transition-colors leading-snug line-clamp-1" title={doc.name}>
                            {doc.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                            {doc.size > 0 && (
                              <span className="text-[10px] md:text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-rose-500/15 text-rose-300 border border-rose-500/30">
                                {(doc.size / (1024 * 1024)).toFixed(2)} MB
                              </span>
                            )}
                            <span className="text-[10px] md:text-xs font-bold text-[var(--theme-text-muted)] uppercase tracking-wider">
                              Verified CampusMonk Handout
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 shrink-0 self-end md:self-center">
                        {doc.url ? (
                          <>
                            <button
                              onClick={() => setSelectedPdf(doc)}
                              className="btn-secondary text-xs md:text-sm py-2 px-4 flex items-center gap-2 font-bold shadow-sm hover:border-rose-500/40"
                            >
                              <Eye size={14} /> Instant Preview
                            </button>
                            <a
                              href={doc.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary text-xs md:text-sm py-2 px-3.5 flex items-center gap-1.5 font-bold text-rose-400 hover:text-white hover:bg-rose-600 border-rose-500/30 transition-all shadow-sm"
                              title="Open in new browser tab"
                            >
                              <ExternalLink size={14} />
                            </a>
                          </>
                        ) : (
                          <span className="text-xs font-bold text-[var(--theme-text-muted)] px-3 py-1.5 rounded-xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)]">
                            Catalog Reference
                          </span>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tests Section */}
          {filteredTests.length > 0 && (
            <div className="space-y-3 mt-6">
              <h2 className="text-xs font-black tracking-wider uppercase text-indigo-400 flex items-center gap-1.5">
                <Award size={14} /> Sectional Mocks & Topic Tests ({filteredTests.length})
              </h2>

              {viewMode === 'tiles' ? (
                /* Tests Tiles Grid (Upgraded with animations, big typography & responsive actions) */
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                  {filteredTests.map((t, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.035 }}
                      whileHover={{ y: -6, scale: 1.015 }}
                      className="p-5 rounded-3xl glass-card border border-[var(--theme-border)] hover:border-indigo-500/50 transition-all flex flex-col justify-between gap-4 group shadow-sm hover:shadow-2xl hover:bg-[var(--theme-bg-subtle)] relative overflow-hidden"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-[52px] h-[52px] rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-md group-hover:scale-105">
                          <Award size={26} />
                        </div>
                        <span className="text-[10px] md:text-xs font-black px-2.5 py-1 rounded-lg bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                          {t.questionCount > 0 ? `${t.questionCount} Questions` : 'Official CBT Exam'}
                        </span>
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-black text-base md:text-lg text-[var(--theme-text-heading)] group-hover:text-indigo-400 transition-colors leading-snug line-clamp-2">
                          {t.name}
                        </h4>
                        <p className="text-xs text-emerald-400 mt-1.5 flex items-center gap-1 font-medium">
                          <CheckCircle2 size={13} /> Verified Solutions & Video Explanations
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[var(--theme-border)] flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          {t.qpHtml && (
                            <a
                              href={t.qpHtml}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary text-xs py-1.5 px-3 flex-1 flex items-center justify-center gap-1 text-[var(--theme-text-muted)] hover:text-white"
                            >
                              <ExternalLink size={12} /> Paper HTML
                            </a>
                          )}
                          {t.solHtml && (
                            <a
                              href={t.solHtml}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary text-xs py-1.5 px-3 flex-1 flex items-center justify-center gap-1 text-emerald-400 hover:text-emerald-300"
                            >
                              <CheckCircle2 size={12} /> Sol HTML
                            </a>
                          )}
                        </div>

                        <button
                          onClick={() => onLaunchTest && onLaunchTest(t)}
                          className="btn-premium w-full text-xs md:text-sm py-2.5 px-4 flex items-center justify-center gap-2 font-black shadow-md hover:shadow-indigo-500/25 active:scale-95"
                        >
                          <Play size={14} className="fill-current" /> Start Mock Test
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                /* Tests List Mode (Upgraded with animations, big font & premium aesthetics) */
                <div className="space-y-3">
                  {filteredTests.map((t, i) => (
                    <motion.div
                      key={t.id || i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.03 }}
                      whileHover={{ x: 6, scale: 1.006 }}
                      className="p-4 md:p-5 rounded-2xl glass-card border border-[var(--theme-border)] hover:border-indigo-500/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 group shadow-sm hover:shadow-xl hover:bg-[var(--theme-bg-subtle)] relative overflow-hidden"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-md group-hover:scale-105">
                          <Award size={22} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-black text-sm md:text-base text-[var(--theme-text-heading)] group-hover:text-indigo-400 transition-colors leading-snug line-clamp-1" title={t.name}>
                            {t.name}
                          </h3>
                          <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                            <span className="text-[10px] md:text-xs font-bold px-2.5 py-0.5 rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                              {t.questionCount > 0 ? `${t.questionCount} Questions` : 'Official CBT Exam Paper'}
                            </span>
                            <span className="text-[10px] md:text-xs font-bold text-emerald-400 flex items-center gap-1">
                              <CheckCircle2 size={12} /> Solution Walkthrough Included
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5 shrink-0 self-end md:self-center">
                        {t.qpHtml && (
                          <a
                            href={t.qpHtml}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-xs md:text-sm py-2 px-3.5 flex items-center gap-1.5 font-bold text-[var(--theme-text-muted)] hover:text-white transition-colors"
                            title="Open raw HTML question paper"
                          >
                            <ExternalLink size={13} /> Paper HTML
                          </a>
                        )}
                        {t.solHtml && (
                          <a
                            href={t.solHtml}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary text-xs md:text-sm py-2 px-3.5 flex items-center gap-1.5 font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                            title="Open raw HTML solutions"
                          >
                            <CheckCircle2 size={13} /> Sol HTML
                          </a>
                        )}
                        <button
                          onClick={() => onLaunchTest && onLaunchTest(t)}
                          className="btn-premium text-xs md:text-sm py-2 px-5 flex items-center gap-2 font-black shadow-md active:scale-95"
                        >
                          <Play size={14} className="fill-current" /> Start Mock Test
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Empty Folder Notice */}
          {filteredSubfolders.length === 0 && filteredVideos.length === 0 && filteredDocs.length === 0 && filteredTests.length === 0 && (
            <div className="p-16 text-center glass-card border border-dashed rounded-3xl text-[var(--theme-text-muted)] font-medium">
              No items in this category or folder.
            </div>
          )}
        </div>
      )}

      {/* PDF Inline Preview Modal */}
      <AnimatePresence>
        {selectedPdf && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-2 md:p-6">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="glass-card w-full max-w-5xl h-[90vh] rounded-3xl border border-[var(--theme-border-strong)] flex flex-col overflow-hidden shadow-2xl"
            >
              <div className="p-4 border-b border-[var(--theme-border)] flex items-center justify-between gap-4 bg-[var(--theme-bg-elevated)]">
                <div className="flex items-center gap-3 min-w-0">
                  <FileText className="text-rose-400 shrink-0" size={20} />
                  <h3 className="font-bold text-sm text-[var(--theme-text-heading)] truncate">
                    {selectedPdf.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href={selectedPdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-xs py-1.5 px-3 flex items-center gap-1"
                  >
                    <ExternalLink size={12} /> Open New Tab
                  </a>
                  <button 
                    onClick={() => setSelectedPdf(null)}
                    className="p-1.5 rounded-xl hover:bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] hover:text-white transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              <div className="flex-1 bg-black/40 relative">
                <iframe
                  src={selectedPdf.url}
                  title={selectedPdf.name}
                  className="w-full h-full border-none"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Local Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card max-w-4xl w-full p-6 rounded-3xl border border-[var(--theme-border)] relative space-y-4 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Video className="text-amber-400" size={22} />
                  <h3 className="font-black text-base text-[var(--theme-text-heading)]">
                    {selectedVideo.name}
                  </h3>
                </div>
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="p-1.5 rounded-xl hover:bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)] hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <video
                  src={selectedVideo.url}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="text-xs text-[var(--theme-text-muted)] flex justify-between items-center pt-2">
                <span>Local HD Offline Walkthrough Session</span>
                <button 
                  onClick={() => setSelectedVideo(null)}
                  className="btn-secondary py-1.5 px-4 text-xs font-bold"
                >
                  Close Player
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Add / Import Course Modal */}
      <AnimatePresence>
        {isAddCourseModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card max-w-lg w-full p-6 md:p-8 rounded-3xl border border-[var(--theme-border-strong)] space-y-5 shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-black text-lg text-[var(--theme-text-heading)] flex items-center gap-2">
                  <Plus size={20} className="text-[var(--theme-text-accent)]" /> Add New Course Vault
                </h3>
                <button 
                  onClick={() => setIsAddCourseModalOpen(false)}
                  className="p-1.5 rounded-xl hover:bg-[var(--theme-bg-subtle)] text-[var(--theme-text-muted)]"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="text-xs text-[var(--theme-text-muted)] leading-relaxed font-medium">
                To connect additional course vaults (such as TCS NQT, Cognizant, or Wipro packs), place the course folder inside <code className="text-indigo-400 font-mono">preparation/</code> and click the re-indexing tool.
              </p>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] space-y-1">
                  <div className="text-xs font-bold text-[var(--theme-text-heading)]">Course Vault Directory</div>
                  <div className="text-[11px] font-mono text-[var(--theme-text-muted)] truncate">
                    preparation/Course_&lt;CourseId&gt;_Full/
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-[var(--theme-bg-subtle)] border border-[var(--theme-border)] space-y-1">
                  <div className="text-xs font-bold text-[var(--theme-text-heading)]">Automated Scanner</div>
                  <div className="text-[11px] text-[var(--theme-text-muted)]">
                    Scans all videos, documents, DPPs, and JSON mock test papers automatically.
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsAddCourseModalOpen(false)}
                className="w-full btn-premium py-3 text-xs font-black uppercase tracking-wider"
              >
                Understood & Close
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
