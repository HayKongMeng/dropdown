import * as React from "react";
import { useState } from "react";
import { X, Search, MoreVertical, ChevronDown, Copy } from "lucide-react";
import { cn } from "../lib/utils";
import { Dialog,DialogContent,
  DialogOverlay,
  DialogPortal, } from "./ui/dialog";

  

const CreateAccessKeyModal = ({ open, onOpenChange }) => {
  const [bucketName, setBucketName] = useState("");
  const [searchBuckets, setSearchBuckets] = useState("");
  const [buckets, setBuckets] = useState([
    {
      id: "bucket2",
      name: "Bucket2",
      domain: "Bucket2.idrivee2-76.com",
      icon: "https://cdn.builder.io/api/v1/image/assets/3b078e06f1464ed6882e255b1243da7b/716996b669718c6232edf01ac947886e0dfc2b65?placeholderIfAbsent=true",
      selected: false,
      expanded: false,
      storageUsed: "10 MB",
      objects: 2,
      creationDate: "Jun 30, 2025, 08:58 AM",
      lastModified: "Jun 30, 2025, 08:58 AM",
    },
    {
      id: "bucket1",
      name: "Bucket1",
      domain: "Bucket2.idrivee2-76.com",
      icon: "https://cdn.builder.io/api/v1/image/assets/3b078e06f1464ed6882e255b1243da7b/4b1447eafb52febf5b10f6ccfabae6cdd514267c?placeholderIfAbsent=true",
      selected: false,
      expanded: false,
      storageUsed: "5 MB",
      objects: 1,
      creationDate: "Jun 25, 2025, 10:30 AM",
      lastModified: "Jun 29, 2025, 02:15 PM",
    },
  ]);

  const toggleSelectAll = () => {
    const allSelected = buckets.every((bucket) => bucket.selected);
    setBuckets(
      buckets.map((bucket) => ({ ...bucket, selected: !allSelected })),
    );
  };

  const toggleBucketSelection = (bucketId) => {
    setBuckets(
      buckets.map((bucket) =>
        bucket.id === bucketId
          ? { ...bucket, selected: !bucket.selected }
          : bucket,
      ),
    );
  };

  const toggleBucketExpansion = (bucketId) => {
    setBuckets(
      buckets.map((bucket) =>
        bucket.id === bucketId
          ? { ...bucket, expanded: !bucket.expanded }
          : bucket,
      ),
    );
  };

  const isAllSelected = buckets.every((bucket) => bucket.selected);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/50" />
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-[640px] bg-white rounded-2xl shadow-[0_20px_20px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col p-8">
            {/* Header */}
            <div className="flex items-center justify-between w-full mb-10">
              <div className="text-2xl font-semibold text-black font-nunito-sans">
                Create access key
              </div>
              <button
                onClick={() => onOpenChange(false)}
                className="w-5 h-5 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Bucket Name Section */}
            <div className="w-full mb-10">
              <div className="text-lg font-bold text-[#4f4f4f] mb-3 font-nunito-sans leading-[1.33]">
                Bucket Name
              </div>
              <input
                type="text"
                value={bucketName}
                onChange={(e) => setBucketName(e.target.value)}
                className="w-full min-h-[48px] border border-black rounded-lg bg-white px-4 font-nunito-sans focus:outline-none"
              />
            </div>

            {/* Assign Buckets Section */}
            <div className="w-full bg-[#f8f9fa] p-5 rounded-lg">
              <div className="text-lg font-bold text-[#4f4f4f] mb-5 font-nunito-sans leading-[1.33]">
                Assign buckets
              </div>

              {/* Search Input */}
              <div className="relative mb-5">
                <div className="w-full min-h-[48px] border border-black rounded-lg bg-white flex items-center px-4">
                  <input
                    type="text"
                    placeholder="Search Buckets"
                    value={searchBuckets}
                    onChange={(e) => setSearchBuckets(e.target.value)}
                    className="flex-1 bg-transparent text-[#4f4f4f] placeholder:text-[#4f4f4f] font-nunito-sans text-lg font-medium focus:outline-none"
                  />
                  <Search className="w-6 h-6 text-[#4f4f4f] ml-2" />
                </div>
              </div>

              {/* Select All */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-6 h-6 flex items-center justify-center">
                  <div
                    className={cn(
                      "w-6 h-6 border-2 rounded-md cursor-pointer flex items-center justify-center",
                      isAllSelected
                        ? "border-[#d1d5db] bg-[#d1d5db]"
                        : "border-[#d1d5db] bg-white",
                    )}
                    onClick={toggleSelectAll}
                  >
                    {isAllSelected && (
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <span className="text-lg font-medium text-[#4f4f4f] font-nunito-sans leading-[1.33]">
                  Select All
                </span>
              </div>

              {/* Bucket List */}
              <div className="space-y-5">
                {buckets.map((bucket) => (
                  <div
                    key={bucket.id}
                    className="flex items-center gap-3 w-full"
                  >
                    <div className="w-6 h-6 flex items-center justify-center">
                      <div
                        className={cn(
                          "w-6 h-6 border-2 rounded-md cursor-pointer flex items-center justify-center",
                          bucket.selected
                            ? "border-[#d1d5db] bg-[#d1d5db]"
                            : "border-[#d1d5db] bg-white",
                        )}
                        onClick={() => toggleBucketSelection(bucket.id)}
                      >
                        {bucket.selected && (
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col max-w-[397px]">
                        {/* Bucket Header */}
                        <div className="bg-[#f8f9fa] rounded-lg min-h-[70px] px-[15px] py-[11px] overflow-hidden">
                          <div className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-[11px] min-w-0">
                              <img
                                src={bucket.icon}
                                alt={bucket.name}
                                className="w-12 h-12 rounded-[10px] shadow-[0_2px_8px_rgba(0,0,0,0.06)] flex-shrink-0"
                              />
                              <div className="flex flex-col justify-center min-h-[48px] min-w-0">
                                <div className="text-sm font-medium text-black font-nunito-sans whitespace-nowrap">
                                  {bucket.name}
                                </div>
                                <div className="text-[10px] text-[#6c757d] font-nunito-sans whitespace-nowrap">
                                  {bucket.domain}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-[13px] flex-shrink-0">
                              <MoreVertical className="w-[18px] h-[18px] text-gray-600" />
                              <button
                                onClick={() => toggleBucketExpansion(bucket.id)}
                                className="flex items-center justify-center"
                              >
                                <ChevronDown
                                  className={cn(
                                    "w-[18px] h-[18px] text-gray-600 transition-transform",
                                    bucket.expanded && "rotate-180",
                                  )}
                                />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Expanded Details */}
                        {bucket.expanded && (
                          <div className="bg-white w-full px-5 pt-[15px] pb-[15px] flex flex-col overflow-hidden font-nunito-sans text-sm font-medium leading-6">
                            {/* End Point */}
                            <div className="flex items-center justify-between min-h-[50px] w-full text-black border-b border-[#f8f9fa]">
                              <div>End point</div>
                              <div className="flex items-center gap-[6px] whitespace-nowrap">
                                <span>{bucket.domain}</span>
                                <Copy className="w-4 h-4 text-gray-600" />
                              </div>
                            </div>

                            {/* Storage Used */}
                            <div className="flex items-center justify-between min-h-[50px] w-full text-black border-b border-[#f8f9fa] mt-5">
                              <div>Storage Used</div>
                              <div>{bucket.storageUsed}</div>
                            </div>

                            {/* Objects */}
                            <div className="flex items-center justify-between min-h-[50px] w-full text-black border-b border-[#f8f9fa] mt-5">
                              <div>Objects</div>
                              <div>{bucket.objects}</div>
                            </div>

                            {/* Creation Date */}
                            <div className="flex items-center justify-between min-h-[50px] w-full border-b border-[#f8f9fa] mt-5">
                              <div className="text-black">Creation Date</div>
                              <div className="text-[#6c757d] text-right flex-1 ml-10">
                                {bucket.creationDate}
                              </div>
                            </div>

                            {/* Last Modified */}
                            <div className="flex items-center justify-between min-h-[50px] w-full border-b border-[#f8f9fa] mt-5">
                              <div className="text-black">Last Modified</div>
                              <div className="text-[#6c757d] text-right flex-1 ml-10">
                                {bucket.lastModified}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex gap-4 mt-10 justify-end">
              <button
                onClick={() => onOpenChange(false)}
                className="min-w-[240px] min-h-[48px] px-5 py-[13px] bg-[#f5f6f7] border border-[#f5f6f7] rounded-lg text-lg font-extrabold text-[#525869] font-nunito-sans hover:bg-gray-200 transition-colors flex-1"
              >
                Cancel
              </button>
              <button className="min-w-[240px] min-h-[48px] px-5 py-[13px] bg-[#3773d5] border border-[#3773d5] rounded-lg text-lg font-extrabold text-[#f5f5f5] font-nunito-sans hover:bg-blue-600 transition-colors flex-1">
                Create access key
              </button>
            </div>
          </div>
        </div>
      </DialogPortal>
    </Dialog>
  );
};

export default CreateAccessKeyModal;